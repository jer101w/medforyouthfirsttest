import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent-base/90 backdrop-blur-md border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src="/medforyouthnormal.png"
              alt="Med For Youth Logo"
              className="h-24 md:h-28 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#about"
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
            >
              About Us
            </a>
            <a
              href="/#programs"
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
            >
              Programs
            </a>
            <a
              href="/#impact"
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
            >
              Impact
            </a>
            <a
              href="/#faq"
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
            >
              FAQ
            </a>
            <Link
              to="/contact"
              className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex gap-4">
            <Link
              to="/register"
              className="bg-brand-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-brand-600/20 hover:bg-brand-700 transition-colors"
            >
              Register Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-900 hover:text-brand-600"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-accent-base border-t border-white/40 p-4 shadow-xl"
        >
          <div className="flex flex-col space-y-4">
            <a
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="text-slate-800 font-medium px-4 py-2 hover:bg-white/50 rounded-lg"
            >
              About Us
            </a>
            <a
              href="/#programs"
              onClick={() => setIsOpen(false)}
              className="text-slate-800 font-medium px-4 py-2 hover:bg-white/50 rounded-lg"
            >
              Programs
            </a>
            <a
              href="/#faq"
              onClick={() => setIsOpen(false)}
              className="text-slate-800 font-medium px-4 py-2 hover:bg-white/50 rounded-lg"
            >
              FAQ
            </a>
            <Link
               to="/contact"
               onClick={() => setIsOpen(false)}
               className="text-slate-800 font-medium px-4 py-2 hover:bg-white/50 rounded-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="bg-brand-600 text-white px-6 py-3 rounded-xl font-bold text-center shadow-md mt-2"
            >
              Register Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
