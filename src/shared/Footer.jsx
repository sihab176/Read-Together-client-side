import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        
        {/* Left Section */}
        <div className="border border-white/30 rounded-2xl p-6 backdrop-blur-md bg-[#2f6f55]/15">
          <div className="space-y-3 text-sm ">
            <p>🌐 www.Thereaders.com</p>
            <p>📍 B-502 Safal Pegasus, Ahmedabad</p>
            <p>📞 (012) 345 6789 000</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-[#2f6f55]/25 flex items-center justify-center hover:bg-white/30 transition cursor-pointer"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>

          <p className="text-xs /60 mt-6">
            © Copyright The Readers All rights reserved.
          </p>
        </div>

        {/* Middle Section */}
        <div className="border border-white/30 rounded-2xl p-6 backdrop-blur-md bg-[#2f6f55]/15 grid grid-cols-3 gap-4 text-sm">
          
          <div>
            <h4 className="font-semibold mb-3 ">About Us</h4>
            <ul className="space-y-2 ">
              <li>About us</li>
              <li>Careers</li>
              <li>Banners & Noble, inc.</li>
              <li>Authors</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 ">Categories</h4>
            <ul className="space-y-2 ">
              <li>Coupons</li>
              <li>E-catalogs</li>
              <li>Order Form</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 ">Quick Help</h4>
            <ul className="space-y-2 ">
              <li>Help Center</li>
              <li>Order Status</li>
              <li>Shipping & Returns</li>
              <li>Covid Safety</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4">
          
          {/* Newsletter */}
          <div className="border border-white/30 rounded-2xl p-6 backdrop-blur-md bg-[#2f6f55]/15">
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to our newsletter!
            </h3>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/20   outline-none"
              />
              <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition">
                Submit
              </button>
            </div>
          </div>

          {/* Payment Icons */}
          <div className="border border-white/30 rounded-2xl p-4 backdrop-blur-md bg-white/10 flex justify-between items-center text-xs /80">
            <span>Apple Pay</span>
            <span>Visa</span>
            <span>AmEx</span>
            <span>Discover</span>
            <span>PayPal</span>
            <span>G Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
