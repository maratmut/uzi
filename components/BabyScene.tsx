'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './BabyScene.module.css'

// Image-based relief, not an anatomical model. Landmarks are registered to
// public/child.jpeg (1370 x 1148); replace them if the illustration changes.
const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uActivity;
  uniform vec2 uPointer;
  varying vec2 vUv;

  float region(vec2 p, vec2 center, vec2 radius) {
    vec2 d = (p - center) / radius;
    return exp(-2.0 * dot(d, d));
  }

  vec2 turn(vec2 p, vec2 pivot, float angle) {
    float s = sin(angle), c = cos(angle);
    return mat2(c, s, -s, c) * (p - pivot) + pivot - p;
  }

  void main() {
    vUv = uv;
    vec3 p = position;
    float head = region(uv, vec2(0.615, 0.637), vec2(0.16, 0.20));
    float torso = region(uv, vec2(0.53, 0.33), vec2(0.25, 0.18));
    float hand = region(uv, vec2(0.473, 0.471), vec2(0.067, 0.115));
    float farHand = region(uv, vec2(0.451, 0.532), vec2(0.051, 0.067));
    float feet = region(uv, vec2(0.272, 0.397), vec2(0.12, 0.135));
    float baby = min(1.0, head + torso + hand + feet);
    float breath = sin(uTime * 1.45);
    float depth = head * 0.15 + torso * 0.11 + hand * 0.08 + feet * 0.065;
    p.z += depth;

    // Each limb moves around its own joint. The ultrasound rim stays anchored.
    vec2 movement = turn(uv, vec2(0.645, 0.48), sin(uTime * 0.95) * 0.035) * head;
    movement += turn(uv, vec2(0.53, 0.352), sin(uTime * 1.3 + 0.6) * 0.07) * hand;
    movement += turn(uv, vec2(0.443, 0.403), sin(uTime * 1.15) * -0.065) * farHand;
    movement += turn(uv, vec2(0.414, 0.32), sin(uTime * 1.05) * 0.07) * feet;
    movement += vec2(0.002 * sin(uTime * 0.8), breath * 0.0035) * baby;
    movement += (uv - vec2(0.54, 0.34)) * torso * breath * 0.012;
    p.xy += movement * vec2(2.38676, 2.0) * uActivity;
    p.xy += uPointer * depth * 0.16 * uActivity;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  uniform sampler2D uImage;
  uniform float uEye;
  uniform vec2 uPointer;
  varying vec2 vUv;

  void main() {
    vec4 color = texture2D(uImage, vUv);

    // The illustration is in profile: only the visible eye is animated.
    // Eye and eyelids share the face's UVs, so they follow every head movement.
    vec2 eye = (vUv - vec2(0.535, 0.579)) * vec2(1370.0, 1148.0);
    eye = mat2(0.944, -0.33, 0.33, 0.944) * eye;
    float x = eye.x / 21.0;
    float arch = max(0.0, 1.0 - x * x);
    float top = arch * (0.8 + uEye * 10.0);
    float bottom = -arch * (0.7 + uEye * 5.0);
    float aperture = smoothstep(bottom - 0.7, bottom + 0.7, eye.y)
      * (1.0 - smoothstep(top - 0.7, top + 0.7, eye.y))
      * (1.0 - smoothstep(0.94, 1.04, abs(x)));
    float iris = length(eye - vec2(-4.0 + uPointer.x * 1.5, 1.0 + uPointer.y));
    vec3 sclera = vec3(0.43, 0.25, 0.105);
    vec3 irisColor = mix(vec3(0.19, 0.083, 0.025), vec3(0.07, 0.026, 0.008), smoothstep(3.0, 7.0, iris));
    vec3 eyeColor = mix(sclera, irisColor, 1.0 - smoothstep(6.0, 7.5, iris));
    eyeColor = mix(eyeColor, vec3(0.018, 0.011, 0.006), 1.0 - smoothstep(2.5, 3.6, iris));
    float glint = 1.0 - smoothstep(0.4, 1.5, length(eye - vec2(-6.0, 3.0)));
    eyeColor = mix(eyeColor, vec3(0.88, 0.64, 0.32), glint * 0.7);
    eyeColor *= 0.7 + 0.3 * (1.0 - smoothstep(bottom, top, eye.y));
    color.rgb = mix(color.rgb, eyeColor, aperture * smoothstep(0.02, 0.28, uEye));
    float lid = (1.0 - smoothstep(0.5, 1.7, abs(eye.y - top)))
      * (1.0 - smoothstep(0.90, 1.05, abs(x))) * uEye;
    color.rgb = mix(color.rgb, color.rgb * 0.42, lid * 0.72);
    gl_FragColor = color;
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`

type Interaction = { hover: boolean; focus: boolean; pinned: boolean; paused: boolean; x: number; y: number }

export default function BabyScene() {
  const containerRef = useRef<HTMLButtonElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const interaction = useRef<Interaction>({ hover: false, focus: false, pinned: false, paused: false, x: 0, y: 0 })
  const wake = useRef<() => void>(() => {})
  const [ready, setReady] = useState(false)
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    let disposed = false
    let visible = false
    let started = false
    let cleanupScene = () => {}
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    async function initialize() {
      if (started || disposed) return
      started = true
      try {
        const THREE = await import('three')
        if (disposed) return
        const renderer = new THREE.WebGLRenderer({ canvas: canvas!, alpha: true, antialias: true, powerPreference: 'low-power' })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
        renderer.outputColorSpace = THREE.SRGBColorSpace
        const scene = new THREE.Scene()
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
        camera.position.z = 4
        const geometry = new THREE.PlaneGeometry(1370 / 1148 * 2, 2, 160, 136)
        const texture = new THREE.TextureLoader().load('/child.jpeg', () => {
          if (disposed) return
          texture.colorSpace = THREE.SRGBColorSpace
          texture.needsUpdate = true
          renderFrame(performance.now())
          setReady(true)
        }, undefined, () => {
          cleanupScene()
          setReady(false)
        })
        texture.colorSpace = THREE.SRGBColorSpace
        const uniforms = {
          uImage: { value: texture },
          uTime: { value: 0 },
          uActivity: { value: 0 },
          uEye: { value: 0 },
          uPointer: { value: new THREE.Vector2() },
        }
        const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })
        scene.add(new THREE.Mesh(geometry, material))
        let frame = 0
        let previousTime = 0
        let activity = 0
        let time = 0
        let lost = false
        let cleaned = false

        function renderFrame(now: number) {
          cancelAnimationFrame(frame)
          frame = 0
          if (disposed || cleaned || lost || !visible || document.hidden) return
          const dt = previousTime ? Math.min((now - previousTime) / 1000, 0.05) : 1 / 60
          previousTime = now
          const input = interaction.current
          const active = !input.paused && (input.hover || input.focus || input.pinned)
          const target = active ? 1 : 0
          activity = THREE.MathUtils.damp(activity, target, active ? 3.3 : 5, dt)
          if (Math.abs(activity - target) < 0.001) activity = target
          if (!reducedMotion.matches) time += dt * activity
          uniforms.uTime.value = time
          uniforms.uActivity.value = reducedMotion.matches ? 0 : activity
          uniforms.uPointer.value.lerp(new THREE.Vector2(active ? input.x : 0, active ? input.y : 0), 1 - Math.exp(-5 * dt))
          // Open gently, then give a brief blink every few seconds on sustained hover.
          const phase = time % 6.4
          const blink = reducedMotion.matches ? 0 : Math.exp(-Math.pow((phase - 5.7) / 0.12, 2))
          uniforms.uEye.value = THREE.MathUtils.smoothstep(activity, 0.15, 0.95) * (1 - blink)
          renderer.render(scene, camera)
          if ((!reducedMotion.matches && active) || activity !== target) frame = requestAnimationFrame(renderFrame)
          else previousTime = 0
        }

        function requestFrame() {
          if (!frame && !cleaned && !lost && visible && !document.hidden) frame = requestAnimationFrame(renderFrame)
        }
        wake.current = requestFrame

        const resize = new ResizeObserver(() => {
          const { width, height } = container!.getBoundingClientRect()
          if (!width || !height) return
          renderer.setSize(width, height, false)
          const imageAspect = 1370 / 1148
          const aspect = width / height
          const halfHeight = Math.min(1, imageAspect / aspect)
          camera.left = -halfHeight * aspect
          camera.right = halfHeight * aspect
          camera.top = halfHeight
          camera.bottom = -halfHeight
          camera.updateProjectionMatrix()
          requestFrame()
        })
        resize.observe(container!)
        const visibilityChanged = () => {
          previousTime = 0
          if (document.hidden) { cancelAnimationFrame(frame); frame = 0 }
          else requestFrame()
        }
        const contextLost = (event: Event) => {
          event.preventDefault()
          lost = true
          cancelAnimationFrame(frame)
          frame = 0
          setReady(false)
        }
        const contextRestored = () => { lost = false; requestFrame(); setReady(true) }
        document.addEventListener('visibilitychange', visibilityChanged)
        reducedMotion.addEventListener('change', requestFrame)
        canvas!.addEventListener('webglcontextlost', contextLost)
        canvas!.addEventListener('webglcontextrestored', contextRestored)
        cleanupScene = () => {
          if (cleaned) return
          cleaned = true
          cancelAnimationFrame(frame)
          resize.disconnect()
          document.removeEventListener('visibilitychange', visibilityChanged)
          reducedMotion.removeEventListener('change', requestFrame)
          canvas!.removeEventListener('webglcontextlost', contextLost)
          canvas!.removeEventListener('webglcontextrestored', contextRestored)
          geometry.dispose()
          material.dispose()
          texture.dispose()
          renderer.dispose()
          wake.current = () => {}
        }
      } catch {
        // Keep the original, server-rendered image when WebGL is unavailable.
        cleanupScene()
        if (!disposed) setReady(false)
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) { void initialize(); wake.current() }
    }, { threshold: 0.05 })
    observer.observe(container)
    return () => { disposed = true; observer.disconnect(); cleanupScene() }
  }, [])

  return (
    <div className={styles.wrapper}>
      <button
        ref={containerRef}
        type="button"
        className={styles.scene}
        aria-label="Оживить малыша"
        aria-describedby="baby-animation-hint"
        aria-pressed={pinned}
        onPointerEnter={(event) => {
          if (event.pointerType !== 'touch') {
            interaction.current.hover = true
            interaction.current.paused = false
          }
          wake.current()
        }}
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect()
          interaction.current.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
          interaction.current.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2
          wake.current()
        }}
        onPointerLeave={() => { interaction.current.hover = false; wake.current() }}
        onPointerCancel={() => { interaction.current.hover = false; wake.current() }}
        onFocus={(event) => {
          interaction.current.focus = event.currentTarget.matches(':focus-visible')
          if (interaction.current.focus) interaction.current.paused = false
          wake.current()
        }}
        onBlur={() => { interaction.current.focus = false; wake.current() }}
        onClick={() => {
          interaction.current.pinned = !interaction.current.pinned
          interaction.current.paused = !interaction.current.pinned
          setPinned(interaction.current.pinned)
          wake.current()
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            interaction.current.pinned = false
            interaction.current.focus = false
            interaction.current.hover = false
            interaction.current.paused = true
            setPinned(false)
            wake.current()
          }
        }}
      >
        <Image src="/child.jpeg" alt="Малыш в утробе — иллюстрация в золотистых тонах" fill priority sizes="(max-width: 767px) 100vw, 536px" className={styles.poster} />
        <canvas ref={canvasRef} className={styles.canvas} data-ready={ready} aria-hidden="true" />
      </button>
      <p id="baby-animation-hint" className={styles.hint}>
        {ready ? pinned ? 'Малыш проснулся · нажмите, чтобы убаюкать' : <><span className={styles.mouseHint}>Наведите курсор — малыш проснётся</span><span className={styles.touchHint}>Коснитесь картинки — малыш проснётся</span></> : 'В ожидании встречи'}
      </p>
    </div>
  )
}
