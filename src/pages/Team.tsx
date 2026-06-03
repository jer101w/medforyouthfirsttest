import { motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";

export function Team() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Our Team</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">
          Meet the People Behind Med For Youth
        </h1>
        <p className="text-lg text-slate-600">
          We are dedicated to empowering the next generation of healthcare leaders and public health advocates.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Jeremy Wang */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-brand-100 flex flex-col items-center p-8 text-center"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-brand-50 shadow-md">
            <img 
               src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80" 
               alt="Jeremy Wang" 
               className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-brand-900 mb-2">Jeremy Wang</h3>
          <p className="text-brand-600 font-semibold mb-4 uppercase tracking-wider text-sm">Founder & Curriculum Instructor</p>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Jeremy is the founder of Med For Youth and teaches the Young Med Leaders Program curriculum. He organizes our programs and is deeply passionate about bridging the gap between medical science and community advocacy.
          </p>
          <div className="flex gap-4 mt-auto">
            <a href="mailto:jeremy@medforyouth.org" className="text-slate-400 hover:text-brand-600 transition-colors p-2 bg-slate-50 rounded-full">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Advisor */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-brand-100 flex flex-col items-center p-8 text-center"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-brand-50 shadow-md">
            <img 
               src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" 
               alt="Professional Advisor" 
               className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-brand-900 mb-2">Medical Advisor</h3>
          <p className="text-brand-600 font-semibold mb-4 uppercase tracking-wider text-sm">Professional Speaker & Guest Advisor</p>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Our medical advisor brings professional experience in healthcare and public speaking, serving as a guest speaker and providing valuable insights into the medical field for our students.
          </p>
          <div className="flex gap-4 mt-auto">
            <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors p-2 bg-slate-50 rounded-full">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
