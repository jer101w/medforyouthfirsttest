import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "Summer Advocacy Program",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    description: "Our Young Med Leaders Program (a 4-week core program starting July 20th) designed for 5th to 10th graders to explore medical science"
  },
  {
    title: "Speaking Workshops",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80",
    description: "Interactive sessions to help 5th to 10th grade students deliver powerful public health speeches"
  },
  {
    title: "Legislative Impact",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    description: "Students turn their learning into real legislative action and health policies"
  }
];

const curriculumWeeks = [
  { week: "Week 1", title: "The AB-2229 Bill", desc: "Learn the facts behind AB-2229 (the Mobile Clinic Grants Initiative), conduct research on local healthcare shortages, and outline your advocacy script!" },
  { week: "Week 2", title: "Speaking Proudly", desc: "Finish writing your script and start learning how to stand tall, make hand motions, and speak slowly." },
  { week: "Week 3", title: "Practicing Out Loud", desc: "Practice saying your speech out loud, finish up any details, and get ready for the camera!" },
  { week: "Week 4", title: "Sharing Your Video", desc: "Record your final speech video and send it to our helpers so we can help share your big ideas!" }
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
              Learn, Speak, Advocate
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
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

        <div className="bg-white/10 rounded-3xl p-8 lg:p-12 border border-white/20 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">Young Med Leaders Program Weekly Plan (Starts July 20th)</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {curriculumWeeks.map((week, idx) => (
              <div key={idx} className="bg-brand-900/50 p-6 rounded-2xl border border-brand-700/50">
                <div className="text-brand-300 font-bold uppercase tracking-wider text-sm mb-2">{week.week}</div>
                <h4 className="text-lg font-bold text-white mb-3">{week.title}</h4>
                <p className="text-brand-100/80 text-sm leading-relaxed">{week.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/curriculum" 
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-500/20"
            >
              Explore Detailed Curriculum
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
