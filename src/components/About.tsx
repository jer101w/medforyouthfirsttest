import { motion } from 'motion/react';
import { Target, HeartPulse, Mic2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.03)] z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">About Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-900 mb-8 leading-tight">
            Bridging the gap between medical science and community advocacy
          </h3>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-left md:text-center">
            Med for Youth was founded by Jeremy Wang to bridge the gap between medical science and community advocacy. While many students are interested in healthcare or speaking, they often lack the platform to showcase their knowledge or advocate for wellness in their own neighborhoods. 
            <br/><br/>
            By combining public speaking with our curriculum, we empower the next generation of healthcare leaders to start leading the conversation today. We believe that when a student learns how to use their voice, they can advocate for many ideas in public health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Mic2 className="w-6 h-6 text-brand-600" />,
              title: "Public Speaking",
              description: "Empowering 5th to 8th graders to deliver powerful advocacy speeches on health topics"
            },
            {
              icon: <HeartPulse className="w-6 h-6 text-brand-600" />,
              title: "Curriculum",
              description: "Teaching simple, effective ways to research medical science and separate fact from fiction"
            },
            {
              icon: <Target className="w-6 h-6 text-brand-600" />,
              title: "Digital Advocacy",
              description: "Turning videos and speeches into actionable bills for legislative purposes in the community"
            }
          ].map((goal, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-accent-base/30 rounded-3xl p-8 hover:bg-accent-base/60 transition-all border border-brand-100/50"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {goal.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-900 mb-3">{goal.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
