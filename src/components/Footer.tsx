import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-bold tracking-tighter text-foreground">
              LAXMI<span className="text-primary">ENG</span>
            </span>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-md">
              Engineering excellence since 1974. Specializing in oil burners, blowers, furnaces, and precision industrial machinery.
            </p>
            <div className="mt-6 flex gap-6">
              <div>
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-1">Est.</span>
                <span className="font-display text-2xl font-bold text-foreground">1974</span>
              </div>
              <div className="w-px bg-border" />
              <div>
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-1">Clients</span>
                <span className="font-display text-2xl font-bold text-foreground">500+</span>
              </div>
              <div className="w-px bg-border" />
              <div>
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-1">Sectors</span>
                <span className="font-display text-2xl font-bold text-foreground">10+</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-primary mb-6">Navigation</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Quality", path: "/quality" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-primary mb-6">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <p>Laxmi Engineering Works</p>
              <p>Industrial Area, India</p>
              <p className="text-foreground">info@laxmieng.com</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-mono tracking-wider">
            © {new Date().getFullYear()} LAXMI ENGINEERING WORKS. ALL RIGHTS RESERVED.
          </p>
          <p className="text-muted-foreground text-xs font-mono tracking-wider">
            LEW-{new Date().getFullYear()}-IND
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
