import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const handleNavClick = (e, href, callback) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (callback) callback();
  }
};

const navLinks = [
  { label: "Details", href: "#details" },
  { label: "Structure", href: "#structure" },
  { label: "Previous Edition", href: "#previous-edition" },
  { label: "About", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-100px 0px -40% 0px" }
    );

    const sections = navLinks.map(link => document.querySelector(link.href)).filter(Boolean);
    const registrationSection = document.querySelector("#registration");
    if (registrationSection) sections.push(registrationSection);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-[60] transition-all duration-500 ease-out pointer-events-none flex justify-center w-full ${
          isScrolled ? "top-4 sm:top-6 px-4" : "top-0"
        }`}
      >
        <nav
          style={{ 
            paddingTop: isScrolled ? '10px' : '16px',
            paddingBottom: isScrolled ? '10px' : '16px',
            paddingLeft: '20px',
            paddingRight: '20px',
            maxWidth: isScrolled ? '1200px' : '100%', 
            width: isScrolled ? '90%' : '100%' 
          }}
          className={`relative pointer-events-auto mx-auto flex items-center justify-between transition-all duration-500 ease-out border border-white/10 ${
            isScrolled
              ? "bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-2xl sm:rounded-full"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <div 
            style={{ 
              minWidth: '60px', 
              opacity: isScrolled ? 1 : 0,
              transform: isScrolled ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease'
            }}
          >
            <div className="flex flex-shrink-0 items-center">
              <span className="text-[#00b4ff] font-bold text-xl sm:text-2xl tracking-tight">
                ISOC
              </span>
            </div>
          </div>

          {/* Desktop Nav links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <a 
                  key={item.href} 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-[13px] font-medium transition-colors tracking-wide px-1 py-1 ${
                    isActive ? "text-cyan-400 border-b border-cyan-400" : "text-gray-300 hover:text-[#00b4ff]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <button 
              onClick={(e) => handleNavClick(e, "#registration")}
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid #00e5ff',
                background: isBtnHovered ? '#00e5ff' : 'transparent',
                color: isBtnHovered ? '#000' : '#00e5ff',
                fontWeight: '600',
                fontSize: '13px',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'background 0.2s ease, color 0.2s ease, transform 0.2s ease',
                marginLeft: '10px'
              }}
            >
              Register
            </button>
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <button 
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[55] lg:hidden bg-[#060609]/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col gap-8 w-full max-w-sm">
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, () => setIsMenuOpen(false))}
                  className="text-2xl font-semibold text-gray-200 hover:text-[#00b4ff] transition-colors text-center py-2"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={(e) => handleNavClick(e, "#registration", () => setIsMenuOpen(false))}
                className="mt-8 bg-[#00b4ff] text-black font-bold py-4 rounded-xl text-xl shadow-[0_8px_32px_rgba(0,180,255,0.3)]"
              >
                Register Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
