import { motion } from "framer-motion";
import { useState } from "react";
import { BiHeart, BiMapPin, BiStar } from "react-icons/bi";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const [liked, setLiked] = useState({});
  // console.log("book single", book);
  return (
    <>
      <motion.div
        key={book.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 * 0.1 }}
        whileHover={{ y: -6 }}
        className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant border border-[#edede9]/50 transition-all duration-500"
      >
        <div className="relative aspect-[5/6] overflow-hidden bg-gradient-to-br from-[#edede9] to-[#f5f5f0] p-6 flex items-center justify-center">
          <img
            src={book.images?.[0]}
            alt={book.title}
            loading="lazy"
            width={512}
            height={768}
            className="h-full bg-white p-4 w-auto object-contain drop-shadow-xl group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-700"
          />
          <button
            onClick={() => setLiked((p) => ({ ...p, [book.id]: !p[book.id] }))}
            aria-label="Wishlist"
            className="absolute top-4 right-4 w-10 h-10 rounded-full glass shadow-soft flex items-center justify-center hover:scale-110 transition-transform"
          >
            <BiHeart
              className={`w-4 h-4 transition-all ${liked[book.id] ? "fill-destructive text-destructive scale-110" : "text-foreground/60"}`}
            />
          </button>
          <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur text-[10px] font-semibold tracking-wide uppercase shadow-soft">
            {book.tag}
          </div>
        </div>

        <div className="p-5 bg-white">
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
            {/* <BiStar className="w-3 h-3 fill-accent text-accent" />
            <span className="font-medium text-foreground">{book.rating}</span>
            <span>·</span> */}
            <BiMapPin className="w-3 h-3 text-yellow-600" />
            {book.location?.area}, {book.location?.district}
          </div>
          <h3 className="font-display font-semibold text-lg leading-tight">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">{book.author}</p>

          <div className="flex items-end justify-between mt-4">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold text-green-800">
                ৳{book.pricing?.basePrice}
              </span>
              <span className="text-xs text-muted-foreground line-through">
                ৳{book.pricing?.originalPrice}
              </span>
            </div>
            <Link
              to={`/bookDetails/${book._id}`}
              className="rounded-full primary  items-center flex text-white hover:bg-primary text-xs h-9 px-6"
            >
              Buy
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BookCard;
