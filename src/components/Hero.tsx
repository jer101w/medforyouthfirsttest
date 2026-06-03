import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-accent-base">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceef7?auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm text-brand-600 font-semibold text-sm md:text-base mb-8 shadow-sm border border-white"
            >
              Health & Medical Advocacy Workshops
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight mb-8"
            >
              Strengthening Young Voices Through Health-Focused Public Speaking
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-slate-700 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              We provide the Young Med Leaders Program, a 4-week program that teaches 5th to 8th graders how
              to research medical science and deliver powerful advocacy speeches
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4"
            >
              <Link
                to="/register"
                className="w-full sm:w-auto bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/25"
              >
                Register Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white text-brand-900 border-2 border-brand-100 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center hover:bg-brand-50 transition-all shadow-sm"
              >
                Contact Us
              </Link>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm font-semibold text-brand-600 bg-brand-50 inline-block px-4 py-2 rounded-full lg:mx-0 mx-auto"
            >
              Register for the Young Med Leaders Program starting July 20th
            </motion.p>
          </div>

          <div className="relative hidden lg:block h-[600px] w-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute top-0 right-0 w-4/5 h-3/5 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1200&q=80" 
                alt="Student speaking" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute bottom-10 left-0 w-3/5 h-2/5 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-30"
            >
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" 
                alt="Students learning" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
