import React from "react";
import { IconContext } from "react-icons";
import { BiBookOpen } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-elegant">
                <BiBookOpen
                  className="w-5 h-5 text-primary-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <span className="font-display text-2xl font-semibold tracking-tight">
                Book<span className="text-gradient-primary">loop</span>
              </span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-sm leading-relaxed">
              The marketplace for pre-loved books. Read more, spend less, and
              give every book a second life.
            </p>
            <div className="flex gap-2 mt-6">
              {[BsTwitter, BsInstagram, BsGithub, BsLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-10 h-10 rounded-xl bg-secondary hover:bg-foreground hover:text-background flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <IconContext className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Marketplace",
              links: ["Browse", "Categories", "Featured", "New arrivals"],
            },
            {
              title: "Sell",
              links: ["List a book", "Seller guide", "Pricing", "Pickup"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Bookloop. Read second-hand,
            first-class.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
