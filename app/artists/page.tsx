'use client';

import Header from '@components/ui/Header';
import ArtistCard from '@components/ArtistCard';
import FilterBar from '@components/FilterBar';
import artistsData from '@data/artists';
import { useEffect, useState } from 'react';

export default function ArtistListingPage() {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [filteredArtists, setFilteredArtists] = useState(artistsData);

  useEffect(() => {
    const filtered = artistsData.filter((artist) => {
      return (
        (category ? artist.category === category : true) &&
        (location ? artist.location === location : true) &&
        (price ? artist.price === price : true)
      );
    });
    setFilteredArtists(filtered);
  }, [category, location, price]);

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">Explore Artists</h1>
        <FilterBar
          category={category}
          location={location}
          price={price}
          onCategoryChange={setCategory}
          onLocationChange={setLocation}
          onPriceChange={setPrice}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} {...artist} />
            ))
          ) : (
            <p className="text-gray-600 col-span-full">No artists found for selected filters.</p>
          )}
        </div>
      </div>
    </main>
  );
}
