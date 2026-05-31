import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const programs = [
  {
    title: "8-Week Curriculum",
    category: "Core Education",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    description: "Designed strictly for 5th to 8th graders, exploring medical science research and advocacy."
  },
  {
    title: "Speaking Workshops",
    category: "Communication",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80",
    description: "Interactive sessions to help middle school students deliver powerful public health speeches."
  },
  {
    title: "Digital Video Production",
    category: "Action",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    description: "Students turn their learning into real health education videos for our global social media audience."
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/30 blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-300 uppercase tracking-widest mb-3">Our Core Offerings</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Learn, Speak, Advocate.
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 border border-brand-700/50">
                <div className="absolute inset-0 bg-brand-900/30 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 z-20 bg-white/95 text-brand-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  {program.category}
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-3 group-hover:text-brand-300 transition-colors flex justify-between items-center text-white">
                {program.title}
                <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-300" />
              </h4>
              <p className="text-brand-100/80 leading-relaxed font-medium">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
