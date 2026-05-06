const authors = [
  {
    id: 1,
    name: "Stephen King",
    books: 120,
    reads: "4.5m",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Joanne Rowling",
    books: 120,
    reads: "4.5m",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Ray Bradbury",
    books: 120,
    reads: "4.5m",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Shahariar Mark",
    books: 120,
    reads: "4.5m",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const AuthorsSection = () => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-3xl border border-neutral-100">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-neutral-900">Authors</h2>
        <button className="text-sm font-semibold text-green-700 hover:text-green-800 underline">
          See More
        </button>
      </div>
      <div className="space-y-6">
        {authors.map((author) => (
          <div key={author.id} className="flex items-center gap-4">
            <img
              src={author.img}
              alt={author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-sm text-neutral-900">
                {author.name}
              </p>
              <p className="text-[11px] text-neutral-500">
                {author.books} books • {author.reads} reads
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AuthorsSection;
