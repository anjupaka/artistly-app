type Props = {
  name: string;
  image: string;
};

export default function CategoryCard({ name, image }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
}
