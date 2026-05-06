import { IoIosArrowForward } from "react-icons/io";

const freeBooks = [
  {
    id: 1,
    title: "Flowers for Algernon",
    author: "John Smith",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/e/ea/FlowersForAlgernon.jpg",
    authorImg: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 2,
    title: "The Catcher in the Rye",
    author: "Shahariar",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
    authorImg: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 3,
    title: "Pet Cemetery",
    author: "Mowsumi Roy",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/e/ee/Pet_Sematary_%281983_novel%29_cover.jpg",
    authorImg: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: 4,
    title: "Clockwork Orange",
    author: "Anthony Burgess",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/A_Clockwork_Orange_%28novel_cover%29.jpg",
    authorImg: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 5,
    title: "Reasons to be Cheerful",
    author: "Nina Stibbe",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1536647900l/41793394._SX318_.jpg",
    authorImg: "https://randomuser.me/api/portraits/women/13.jpg",
  },
];
const FreeBooksSection = () => {
  return (
    <div className="p-5 bg-white shadow-lg rounded-3xl border border-neutral-100">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">Free Books</h2>
        <button className="text-sm font-semibold text-green-600 hover:text-green-700">
          See More
        </button>
      </div>
      <div className="space-y-">
        {freeBooks.map((book) => (
          <div
            key={book.id}
            className="flex items-center p-2 mb-2 border border-gray-200 transition duration-150 rounded-2xl hover:bg-neutral-50"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-14 h-16 object-cover rounded-lg shadow-sm"
            />
            <div className="flex-grow">
              <p className="text-sm font-semibold text-neutral-900">
                {book.title}
              </p>
              <div className="flex items-center gap-2.5 mt-1.5">
                <img
                  src={book.authorImg}
                  alt={book.author}
                  className="w-7 h-7 rounded-full"
                />
                <p className="text-[10px] font-medium text-neutral-500">
                  {book.author}
                </p>
              </div>
            </div>
            {/* Custom arrow icon within a light green circle */}
            <div className="flex items-center justify-center p-2 rounded-full bg-green-50 text-green-600 border border-green-100">
              <IoIosArrowForward className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FreeBooksSection;
