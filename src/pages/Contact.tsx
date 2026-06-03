import { motion } from "motion/react";
import { MessageSquare, Mail, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Contact() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-brand-100 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-brand-900 mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          Have questions about our programs or want to get involved?
          We'd love to hear from you! Reach out to us via text or email, or connect with us on social media.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 flex flex-col items-center">
            <div className="bg-brand-100 p-4 rounded-full text-brand-600 mb-6">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-2">Text Us At</h3>
            <p className="text-lg font-medium text-slate-700 mb-4">(562) 972-0298</p>
          </div>

          <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 flex flex-col items-center">
            <div className="bg-brand-100 p-4 rounded-full text-brand-600 mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-2">Email Us At</h3>
            <a 
              href="mailto:jeremy@medforyouth.org" 
              className="text-lg font-medium text-brand-600 hover:text-brand-700 transition-colors mb-4"
            >
              jeremy@medforyouth.org
            </a>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-12">
          <h3 className="text-2xl font-bold text-brand-900 mb-8">Follow Our Journey</h3>
          <div className="flex justify-center gap-6">
            <a href="#" className="bg-slate-50 p-4 rounded-xl text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-all group">
              <Instagram className="w-8 h-8 transform group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="bg-slate-50 p-4 rounded-xl text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-all group">
              <Youtube className="w-8 h-8 transform group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="bg-slate-50 p-4 rounded-xl text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-all group flex items-center justify-center">
              {/* Custom TikTok icon using an SVG path */}
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8 transform group-hover:scale-110 transition-transform"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
