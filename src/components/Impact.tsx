import { motion } from 'motion/react';

export function Impact() {
  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-accent-base">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80" 
                alt="Middle school students learning" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-600 p-8 rounded-[2rem] shadow-xl max-w-xs hidden md:block text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-brand-100 font-medium">Of our students draft their own health advocacy proposals by week 4</p>
            </div>
          </motion.div>
          
            <div>
              <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">Our Campaign</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-brand-900 mb-6 leading-tight">
                Taking Action for Community Impact
              </h3>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                We empower young people to turn their health concepts into real-world action. Under our **Young Med Leaders Program**, all 15 students join forces to advocate for California **Assembly Bill 2229 (AB-2229)**: establishing Mobile Health Clinic Grants at low-income public schools to guarantee on-campus medical, dental, and vision checkups for all 5th to 10th graders.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Fostering confident public speaking skills",
                  "Creating persuasive and factual health arguments",
                  "Synthesizing youth voice into real community policy proposals"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-600"></div>
                    </div>
                    <span className="text-slate-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex">
                <a
                  href="/advocacy"
                  className="bg-brand-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-brand-600/20 hover:bg-brand-700 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  Watch Student Videos & Sign Petition
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
