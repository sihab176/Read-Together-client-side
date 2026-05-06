import { FiFilter } from "react-icons/fi";
const bestPopularBooks = [
  {
    id: 1,
    title: "Lagi Probation",
    author: "Samuel Ray",
    price: "452.00",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1614915647i/57303030.jpg",
    authorImg: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 2,
    title: "Sunset & Rosie",
    author: "Tere Liye",
    price: "158.00",
    cover:
      "https://upload.wikimedia.org/wikipedia/id/8/87/Sampul_Sunset_Bersama_Rosie.jpg",
    authorImg: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 3,
    title: "Laut Bercerita",
    author: "Sayaka Murata",
    price: "325.00",
    cover:
      "https://gramediaweb.azureedge.net/assets/uploads/products/9786230006248_Laut-Bercerita_500.jpg",
    authorImg: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: 4,
    title: "Segi Tiga",
    author: "Sapardi Amono",
    price: "159.00",
    cover:
      "https://gramediaweb.azureedge.net/assets/uploads/products/9786230007818_Segi-Tiga-Sapardi-Djoko-Damono_C_500.jpg",
    authorImg: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];
const BestPopularSection = () => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-3xl border border-neutral-100">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold text-neutral-900">Best Popular</h2>
        <button className="flex items-center gap-2 px-5 py-2.5 font-medium text-green-600 transition duration-150 bg-green-50 rounded-xl hover:bg-green-100">
          <FiFilter className="w-5 h-5" />
          Filter
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  ">
        {bestPopularBooks.map((book) => (
          <div key={book.id} className="flex flex-col ">
            <div className="flex items-center justify-center mb-2 p-2 rounded-3xl h-[150px] bg-green-50 border border-green-100">
              <img
                src={book.cover}
                alt={book.title}
                className="object-contain w-full h-full shadow-lg rounded-lg"
              />
            </div>
            {/* Content details matching alignment */}
            <p className="mb-2 text-xl font-semibold text-neutral-900">
              {book.title}
            </p>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={book.authorImg}
                alt={book.author}
                className="w-8 h-8 rounded-full"
              />
              <p className="text-sm font-medium text-neutral-600">
                {book.author}
              </p>
            </div>
            {/* Green price text */}
            <p className="mb-6 text-xl font-bold text-green-600">
              $ {book.price}
            </p>
            {/* Green action button */}
            <button className="w-full py-3.5 mt-auto text-lg font-semibold text-white transition duration-150 rounded-xl bg-green-600 hover:bg-green-700 shadow-[0_5px_15px_rgba(22,163,74,0.2)]">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BestPopularSection;
