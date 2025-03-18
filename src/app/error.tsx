'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Bir Hata Oluştu
        </h2>
        <p className="mb-8 text-gray-300">
          Endişelenmeyin, teknik ekibimiz durumdan haberdar edildi.
        </p>
        <button
          onClick={reset}
          className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary/80"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
} 