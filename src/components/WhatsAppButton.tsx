import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "919867788995";
  const message = encodeURIComponent("Hello, I'm interested in your industrial products. Please share more details.");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  const indiamartUrl = "https://www.indiamart.com/laxmiengineering-works-mumbai/";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* IndiaMART Button */}
      <motion.a
        href={indiamartUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#146EB4] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group relative"
        aria-label="Buy on IndiaMART"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 relative z-10" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-foreground text-background px-3 py-1.5 rounded font-mono text-xs tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Buy on IndiaMART
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group relative"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <svg
          viewBox="0 0 32 32"
          fill="white"
          className="w-8 h-8 relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.746 3.054 9.378L1.058 31.07l5.896-1.952a15.924 15.924 0 008.05 2.186C23.826 31.304 31 24.128 31 16.004S23.826 0 16.004 0zm9.53 22.61c-.396 1.118-2.328 2.14-3.21 2.274-.882.136-1.706.396-5.744-1.234-4.872-1.968-7.97-6.972-8.21-7.296-.238-.324-1.948-2.592-1.948-4.944s1.232-3.51 1.67-3.992c.438-.48.956-.6 1.274-.6.318 0 .636.002.914.016.294.016.688-.112 1.076.82.396.954 1.352 3.294 1.47 3.534.12.238.198.518.04.838-.16.318-.238.518-.478.798-.238.278-.502.622-.716.836-.238.238-.486.496-.21.974.278.478 1.234 2.036 2.65 3.298 1.822 1.622 3.358 2.126 3.836 2.364.478.238.756.198 1.034-.12.278-.318 1.194-1.392 1.512-1.87.318-.478.636-.398 1.074-.238.438.16 2.78 1.312 3.258 1.55.478.238.796.358.914.556.12.198.12 1.152-.276 2.27z" />
        </svg>
        <span className="absolute right-full mr-3 bg-foreground text-background px-3 py-1.5 rounded font-mono text-xs tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
