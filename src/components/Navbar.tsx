import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

import { products } from "@/pages/Products";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Quality", path: "/quality" },
  { label: "Contact", path: "/contact" },
];

// Safe slug — strips & and all non-alphanumeric chars so URLs don't break
const toSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const productNavItems = products.map((p) => ({
  name: p.name,
  slug: toSlug(p.name),
  path: `/products?open=${toSlug(p.name)}`,
  models: p.dropdownModels || null,
}));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Laxmi Engineering Works" className="h-12 w-auto drop-shadow-md" />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex items-center gap-6">

          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-display text-xs font-semibold tracking-[0.15em] uppercase transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* ================= PRODUCTS DROPDOWN ================= */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductOpen(true)}
            onMouseLeave={() => setIsProductOpen(false)}
          >
          <Link
  to="/products"
  className="flex items-center gap-1 font-display text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground hover:text-primary"
>
  Products <ChevronDown size={14} />
</Link>

            <AnimatePresence>
              {isProductOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-3 bg-background border border-border shadow-lg min-w-[240px] z-50"
                >
                  {productNavItems.map((item) => (
                    <div key={item.name} className="group/item relative">

                      {/* Main product row */}
                      <Link
                        to={item.path}
                        onClick={() => setIsProductOpen(false)}
                        className="flex justify-between items-center px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10"
                      >
                        {item.name}
                        {item.models && <ChevronRight size={14} />}
                      </Link>

                      {/* Model sub-menu — uses encodeURIComponent so spaces/special chars are safe */}
                      {item.models && (
                        <div className="absolute left-full top-0 hidden group-hover/item:block bg-background border border-border min-w-[200px] shadow-lg z-50">
                          {item.models.map((model) => (
                            <Link
                              key={model.label}
                              to={`/products?open=${item.slug}&model=${encodeURIComponent(model.label)}`}
                              onClick={() => setIsProductOpen(false)}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10"
                            >
                              {model.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-display text-xs font-semibold tracking-[0.15em] uppercase transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-6 py-2.5 font-display text-xs font-semibold tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors"
          >
            Get Quote
          </Link>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-sm font-semibold uppercase py-2 text-muted-foreground"
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-border pt-4">
                <span className="text-xs uppercase text-primary mb-2 block">Products</span>
                {productNavItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-sm text-muted-foreground"
                    >
                      {item.name}
                    </Link>
                    {item.models && (
                      <div className="pl-4">
                        {item.models.map((model) => (
                          <Link
                            key={model.label}
                            to={`/products?open=${item.slug}&model=${encodeURIComponent(model.label)}`}
                            onClick={() => setIsOpen(false)}
                            className="block py-1 text-xs text-muted-foreground"
                          >
                            ↳ {model.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;