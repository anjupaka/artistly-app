import React from 'react';
import Header from '@components/ui/Header';

interface Artist {
  name: string;
  category: string;
  city: string;
  fee: string;
}

const artists: Artist[] = [
  {
    name: 'Priya Sharma',
    category: 'Singer',
    city: 'Delhi',
    fee: '₹75,000',
  },
  {
    name: 'Ravi Kumar',
    category: 'Dancer',
    city: 'Mumbai',
    fee: '₹60,000',
  },
  {
    name: 'Anjali Mehta',
    category: 'DJ',
    city: 'Bangalore',
    fee: '₹1,20,000',
  },
  {
    name: 'Akash Verma',
    category: 'Speaker',
    city: 'Hyderabad',
    fee: '₹90,000',
  },
];

function ArtistTable({ data }: { data: Artist[] }) {
  if (data.length === 0) {
    return <p className="text-center text-gray-600">No artist submissions found.</p>;
  }

  return (
    <div className="overflow-x-auto shadow-lg rounded-2xl bg-white/90 backdrop-blur">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-indigo-200 text-indigo-800">
          <tr>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Category</th>
            <th className="px-6 py-3 text-left">City</th>
            <th className="px-6 py-3 text-left">Fee</th>
            <th className="px-6 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artist, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0 ? 'bg-white hover:bg-indigo-50' : 'bg-gray-50 hover:bg-indigo-50'
              }
            >
              <td className="px-6 py-4 font-medium text-indigo-900">{artist.name}</td>
              <td className="px-6 py-4">{artist.category}</td>
              <td className="px-6 py-4">{artist.city}</td>
              <td className="px-6 py-4">{artist.fee}</td>
              <td className="px-6 py-4">
                <button className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all text-sm">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-foreground">
      <Header />
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">📋 Manager Dashboard</h1>
        <ArtistTable data={artists} />
      </div>
    </main>
  );
}
