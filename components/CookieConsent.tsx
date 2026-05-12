'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieAccepted', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-gray-100 p-4 animate-fade-in-up">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-xs leading-relaxed text-center sm:text-left">
          Сайт использует только технические cookie-файлы для корректной работы.
          Они не передаются третьим лицам и не используются для отслеживания.{' '}
          <Link href="/user-agreement" className="text-rose-500 hover:underline">
            Подробнее
          </Link>
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={declineCookies}
            className="text-gray-400 hover:text-gray-600 text-xs transition-colors px-3 py-1.5 border border-gray-200 rounded-full"
          >
            Отказаться
          </button>
          <button
            onClick={acceptCookies}
            className="bg-rose-400 hover:bg-rose-500 text-white font-semibold py-1.5 px-6 text-xs rounded-full transition-colors duration-200"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}