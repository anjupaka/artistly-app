type Props = {
  name: string;
  category: string;
  location: string;
  price: string;
  image: string;
};

export default function ArtistCard({ name, category, location, price, image }: Props) {
  const handleQuoteClick = () => {
    alert(`Booking request sent for ${name}`);
    console.log(`User requested a quote for: ${name}`);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:scale-105 transition">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{category} · {location}</p>
        <p className="font-semibold text-indigo-600">{price}</p>
        <button
          onClick={handleQuoteClick}
          className="w-full bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700 transition"
        >
          Ask for Quote
        </button>
      </div>
    </div>
  );
}
