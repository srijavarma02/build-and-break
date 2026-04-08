import { useState, useEffect } from 'react';

export default function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    "Details",
    "Structure",
    "Previous Edition",
    "About",
    "Contact Us"
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-[60] transition-all duration-500 ease-out pointer-events-none w-full flex justify-center ${
        isScrolled ? "top-6" : "top-0"
      }`}
    >
      {/* 5. WIDTH FIX: max-w-[1400px] */}
      <div className="w-[96%] max-w-[1400px]">
        {/* 1. REMOVE EDGE-HUGGING BEHAVIOR (justify-between removed) */}
        <nav
          className={`relative pointer-events-auto flex items-center transition-all duration-500 ease-out border border-white/10 ${
            isScrolled
              ? "w-full bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-full py-3.5"
              : "w-full bg-transparent border-transparent py-8"
          }`}
        >
          {/* 3. LOGO POSITION FIX: flex-1 + pl-8 */}
          <div className="flex-1 pl-8 md:pl-10">
            <div 
              className={`flex flex-shrink-0 items-center transition-all duration-700 ease-out ${
                isScrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6 pointer-events-none"
              }`}
            >
              <span className="text-[#00b4ff] font-bold text-xl xl:text-3xl tracking-tight">
                ISOC
              </span>
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 justify-center">
            {navLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[15px] font-semibold text-gray-300 hover:text-[#00b4ff] transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          {/* 4. BUTTON POSITION FIX: flex-1 + justify-end + pr-8 */}
          <div className="flex-1 flex justify-end pr-8 md:pr-10">
            <div className="flex-shrink-0">
              <a
                href="#register"
                className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold text-[15px] transition-all duration-300 ${
                  isScrolled
                    ? "px-10 py-3.5 bg-gradient-to-r from-[#00b4ff] to-[#0082ba] text-white shadow-[0_0_20px_rgba(0,180,255,0.4)] hover:shadow-[0_0_35px_rgba(0,180,255,0.7)] hover:-translate-y-0.5"
                    : "px-10 py-3.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 hover:border-[#00b4ff]/50"
                }`}
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-white/30" />
                </div>
                <span className="relative z-10 flex items-center gap-2">
                  {/* 6. BUTTON TEXT */}
                  Register
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
