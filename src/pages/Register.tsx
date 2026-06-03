import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export function Register() {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1AQYBHXHm0YLQcKzMqaLpl09RjRa0kiL6IB98KiVMvr0/viewform";

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-brand-100"
      >
        <div className="text-center mb-10">
          <div className="inline-block bg-brand-100 text-brand-700 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
            100% Free Program
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
            Register for the Young Med Leaders Program
          </h1>
          <p className="text-slate-600 mb-6">
            Join our Young Med Leaders Program (a 4-week summer program for 5th to 8th graders) starting July 20th to build clinical literacy and learn
            how to deliver powerful advocacy speeches. It's completely free
          </p>
          <a 
            href={GOOGLE_FORM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 hover:bg-brand-200 font-bold px-6 py-3 rounded-full transition-colors"
          >
            Open Form in New Tab <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="w-full bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
          <iframe 
            src={`${GOOGLE_FORM_URL}?embedded=true`} 
            width="100%" 
            height="800" 
            className="border-0"
            title="Registration Form"
          >
            Loading form...
          </iframe>
        </div>
      </motion.div>
    </div>
  );
}
