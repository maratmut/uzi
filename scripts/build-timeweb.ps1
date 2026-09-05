$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$outputDirectory = Join-Path $projectRoot 'out'
$archivePath = Join-Path $projectRoot 'timeweb-upload.zip'

Push-Location $projectRoot
try {
    npm run build

    if (-not (Test-Path -LiteralPath (Join-Path $outputDirectory 'index.html'))) {
        throw 'Static export failed: out/index.html was not created.'
    }

    if (Test-Path -LiteralPath $archivePath) {
        Remove-Item -LiteralPath $archivePath -Force
    }

    Add-Type -AssemblyName System.IO.Compression
    Add-Type -AssemblyName System.IO.Compression.FileSystem

    $archiveStream = [System.IO.File]::Open(
        $archivePath,
        [System.IO.FileMode]::CreateNew
    )
    $archive = New-Object System.IO.Compression.ZipArchive(
        $archiveStream,
        [System.IO.Compression.ZipArchiveMode]::Create
    )

    try {
        Get-ChildItem -LiteralPath $outputDirectory -Recurse -Force -File |
            Sort-Object FullName |
            ForEach-Object {
                $relativePath = $_.FullName.Substring($outputDirectory.Length + 1)
                $entryName = $relativePath.Replace('\', '/')

                [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
                    $archive,
                    $_.FullName,
                    $entryName,
                    [System.IO.Compression.CompressionLevel]::Optimal
                ) | Out-Null
            }
    }
    finally {
        $archive.Dispose()
        $archiveStream.Dispose()
    }

    Write-Host "Timeweb archive created: $archivePath"
}
finally {
    Pop-Location
}
