type FilterProps = {
  category: string;
  location: string;
  price: string;
  onCategoryChange: (val: string) => void;
  onLocationChange: (val: string) => void;
  onPriceChange: (val: string) => void;
};

export default function FilterBar({
  category,
  location,
  price,
  onCategoryChange,
  onLocationChange,
  onPriceChange,
}: FilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)} className="px-4 py-2 border rounded">
        <option value="">All Categories</option>
        <option value="Singers">Singers</option>
        <option value="Dancers">Dancers</option>
        <option value="DJs">DJs</option>
        <option value="Speakers">Speakers</option>
      </select>

      <select value={location} onChange={(e) => onLocationChange(e.target.value)} className="px-4 py-2 border rounded">
        <option value="">All Locations</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Pune">Pune</option>
      </select>

      <select value={price} onChange={(e) => onPriceChange(e.target.value)} className="px-4 py-2 border rounded">
        <option value="">All Prices</option>
        <option value="Below ₹50,000">Below ₹50,000</option>
        <option value="₹50,000–₹100,000">₹50,000–₹100,000</option>
        <option value="₹100,000–₹200,000">₹100,000–₹200,000</option>
        <option value="Above ₹200,000">Above ₹200,000</option>
      </select>
    </div>
  );
}
