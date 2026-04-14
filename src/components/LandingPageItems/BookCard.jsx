import { FaStar, FaHeart } from "react-icons/fa";
const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-yellow-500/40 hover:shadow-xl transition group">
      
      {/* Image */}
      <div className="relative h-40">
        <img
          src={book.image}
          alt="book"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-green-600 text-xs px-3 py-1 rounded-full text-white">
          {book.condition}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 text-white">
        <p className="text-xs text-yellow-400 tracking-widest mb-1">
          {book.category}
        </p>

        <h3 className="font-semibold text-lg">{book.title}</h3>
        <p className="text-sm text-gray-400">{book.author}</p>

        {/* Tags */}
        <div className="flex gap-2 mt-2">
          <span className="text-xs bg-gray-700 px-2 py-1 rounded">HSC</span>
          <span className="text-xs bg-gray-700 px-2 py-1 rounded">All</span>
          <span className="text-xs bg-gray-700 px-2 py-1 rounded">
            {book.condition}
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 border-t border-gray-700 pt-3">
          <p className="text-gray-400 line-through text-sm">৳{book.oldPrice}</p>
          <p className="text-yellow-400 text-xl font-bold">৳{book.price}</p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-3 text-sm text-gray-400">
          <div>
            📍 {book.location} • ⭐ {book.rating}
          </div>

          <button className="bg-gray-800 p-2 rounded-full hover:bg-red-500 transition">
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;