import { motion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
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

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <div className="relative group">
                <button className="text-slate-700 font-medium hover:text-brand-600 transition-colors flex items-center gap-1 py-2">
                  Explore <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50">
                  <a
                    href="/#about"
                    className="px-4 py-2.5 text-slate-700 hover:text-brand-600 hover:bg-slate-50 transition-colors font-medium text-sm"
                  >
                    About Us
                  </a>
                  <a
                    href="/#programs"
                    className="px-4 py-2.5 text-slate-700 hover:text-brand-600 hover:bg-slate-50 transition-colors font-medium text-sm"
                  >
                    Programs
                  </a>
                  <a
                    href="/#impact"
                    className="px-4 py-2.5 text-slate-700 hover:text-brand-600 hover:bg-slate-50 transition-colors font-medium text-sm"
                  >
                    Impact
                  </a>
                  <a
                    href="/#faq"
                    className="px-4 py-2.5 text-slate-700 hover:text-brand-600 hover:bg-slate-50 transition-colors font-medium text-sm"
                  >
                    FAQ
                  </a>
                </div>
              </div>
            </div>

            <div className="w-px h-6 bg-slate-300"></div>

            <div className="flex items-center space-x-4 lg:space-x-6">
              <Link
                to="/team"
                className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
              >
                Our Team
              </Link>
              <Link
                to="/curriculum"
                className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
              >
                Curriculum
              </Link>
              <Link
                to="/advocacy"
                className="text-brand-700 font-bold hover:text-brand-600 transition-colors flex items-center gap-1.5 bg-brand-50 px-3 py-1.5 rounded-full border border-brand-100"
              >
                Our Campaign
                <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
              </Link>
              <Link
                to="/contact"
                className="text-slate-700 hover:text-brand-600 font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
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
            <div className="flex flex-col space-y-2">
               <div className="text-slate-500 font-bold px-4 pt-2 text-sm uppercase tracking-wider">
                 Explore
               </div>
              <a
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="text-slate-800 font-medium px-4 py-2 hover:bg-white/50 rounded-lg pl-8"
              >
                About Us
              </a>
              <a
                href="/#programs"
                onClick={() => setIsOpen(false)}
                className="text-slate-800 font-medium px-4 py-2 hover:bg-white/50 rounded-lg pl-8"
              >
                Programs
              </a>
              <a
                href="/#impact"
                onClick={() => setIsOpen(false)}
                className="text-slate-800 font-medium px-4 py-2 hover:bg-white/50 rounded-lg pl-8"
              >
                Impact
              </a>
              <a
                href="/#faq"
                onClick={() => setIsOpen(false)}
                className="text-slate-800 font-medium px-4 py-2 hover:bg-white/50 rounded-lg pl-8"
              >
                FAQ
              </a>
            </div>

            <div className="h-px w-full bg-slate-300 my-2"></div>

            <div className="flex flex-col space-y-2">
              <Link
                 to="/team"
                 onClick={() => setIsOpen(false)}
                 className="text-slate-800 font-medium px-4 py-2 hover:bg-white/50 rounded-lg"
              >
                Our Team
              </Link>
              <Link
                 to="/curriculum"
                 onClick={() => setIsOpen(false)}
                 className="text-slate-800 font-medium px-4 py-2 hover:bg-white/50 rounded-lg"
              >
                Curriculum
              </Link>
              <Link
                 to="/advocacy"
                 onClick={() => setIsOpen(false)}
                 className="text-brand-800 font-bold px-4 py-2 hover:bg-white/50 rounded-lg flex items-center justify-between"
              >
                <span>Our Campaign</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-600 animate-pulse"></span>
              </Link>
              <Link
                 to="/contact"
                 onClick={() => setIsOpen(false)}
                 className="text-slate-800 font-medium px-4 py-2 hover:bg-white/50 rounded-lg"
              >
                Contact Us
              </Link>
            </div>

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
