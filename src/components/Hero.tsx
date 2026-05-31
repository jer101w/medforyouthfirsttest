import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-accent-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="/medforyouthhorizontal.png"
            alt="Med For Youth Logo"
            className="h-24 md:h-32 w-auto mx-auto mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm text-brand-600 font-semibold text-sm md:text-base mb-8 shadow-sm border border-white"
          >
            Med for Youth provides health and medical focused public speaking
            workshops and digital advocacy platforms for youth to build clinical
            literacy.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight mb-8"
          >
            Strengthening young voices through health-focused public speaking
            and medical advocacy workshops.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            We provide an 8-week curriculum that teaches 5th to 8th graders how
            to research medical science and deliver powerful advocacy speeches.
            Our students turn their learning into action by producing health
            education videos for a global digital audience on our social media.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/register"
              className="w-full sm:w-auto bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/25"
            >
              Register Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient blobs blending with EBEAE5 */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-200/40 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-white/70 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
}
