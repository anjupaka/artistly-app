'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-indigo-600">
          Artistly.com
        </Link>

        {/* Nav Links */}
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base text-gray-700 font-medium">
          <Link href="/artists" className="hover:text-indigo-500 transition">
            Explore Artists
          </Link>
          <Link href="/onboarding" className="hover:text-indigo-500 transition">
            Onboard Artist
          </Link>
          <Link href="/dashboard" className="hover:text-indigo-500 transition">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
