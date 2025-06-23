'use client';

import Header from '@components/ui/Header';
import CategoryCard from '@components/ui/CategoryCard';
import categories from '@data/categories';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          Discover & Book Top Performing Artists
        </h1>
        <p className="text-gray-600 mb-6">
          Artistly.com helps event planners connect with talented artists around the country.
        </p>
        <Link href="/artists">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition">
            Explore Artists
          </button>
        </Link>
      </section>

      {/* Category Cards */}
      <section className="px-6 pb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Artist Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} name={cat.name} image={cat.image} />
          ))}
        </div>
      </section>
    </main>
  );
}
