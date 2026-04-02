import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC1TFxFn87k-qsHiDOp0j8Sw",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    color: "#FF0000",
    bg: "rgba(255,0,0,0.1)",
  },
  {
    label: "Website",
    href: "https://www.laxmieng.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    color: "#4A90D9",
    bg: "rgba(74,144,217,0.1)",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/105469550",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.1)",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_laxmi_engineering_works_?igsh=cGFuMmVjZm02a3Bs",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
    color: "#E1306C",
    bg: "rgba(225,48,108,0.1)",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1CJ5NP1idM/?mibextid=wwXIfr",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: "#1877F2",
    bg: "rgba(24,119,242,0.1)",
  },
  {
    label: "Maps",
    href: "https://maps.app.goo.gl/vcdgQTqzyY1urzQE9?g_st=ic",
    icon: <MapPin size={20} />,
    color: "#34A853",
    bg: "rgba(52,168,83,0.1)",
  },
];

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

            {/* Social Links */}
            <div className="mt-8">
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-4">Follow Us</span>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map(({ icon, label, href, color, bg }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      color,
                      backgroundColor: bg,
                      border: `1px solid ${color}44`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${color}25`;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = bg;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = `${color}44`;
                    }}
                    className="w-10 h-10 flex items-center justify-center rounded-sm transition-none"
                  >
                    {icon}
                  </a>
                ))}
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
              <p>Goregaon East, Mumbai – 400063</p>
              <a
                href="mailto:info@laxmieng.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                info@laxmieng.com
              </a>
              <a
                href="tel:+919833241824"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                +91 98332 41824
              </a>
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