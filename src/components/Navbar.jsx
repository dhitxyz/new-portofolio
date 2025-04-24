import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BiMenu, BiMoon, BiSun, BiX } from "react-icons/bi";
import gsap from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const navbarRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#081014] md:bg-white/0 md:dark:bg-[#081014]/0 py-2"
    >
      <div className="max-w-6xl mx-auto px-4 md:py-4 flex justify-between items-center">
        <div className="font-bold backdrop-blur-xl rounded-full px-6 py-4 -ml-8 md:-ml-0">KAPAN</div>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <BiX size={30} /> : <BiMenu size={30} />}
        </div>
        <div className="hidden md:flex md:flex-row space-y-2 md:space-y-0 md:space-x-6 gap-16 backdrop-blur-xl rounded-full px-6 py-4 text-[#475569] dark:text-[#B6B6B6]">
          <Link to="/" className="hover:text-amber-300 transition-colors duration-300">HOME</Link>
          <Link to="/" className="hover:text-amber-300 transition-colors duration-300 cursor-help">PROJECTS</Link>
          <Link to="/" className="hover:text-amber-300 transition-colors duration-300">ABOUT</Link>
        </div>
        <div className="hidden md:flex">
          <button
            onClick={toggleDarkMode}
            className="flex justify-center items-center rounded-full border border-slate-400 text-slate-400 text-xl shadow-lg w-12 h-12"
          >
            {darkMode ? <BiSun /> : <BiMoon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-[#475569] dark:text-[#B6B6B6]">
          <Link to="/" className="block">HOME</Link>
          <Link to="/" className="block">PROJECTS</Link>
          <Link to="/" className="block">ABOUT</Link>
          <button
            onClick={toggleDarkMode}
            className="gap-2 rounded-full border border-slate-400 text-slate-400 px-4 py-2 shadow "
          >
            {darkMode ? <BiSun /> : <BiMoon />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
