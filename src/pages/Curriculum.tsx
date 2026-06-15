import { motion } from "motion/react";
import { BookOpen, Calendar, Clock, Target, ArrowRight, FileText, Stethoscope, Presentation } from "lucide-react";
import { Link } from "react-router-dom";

const weeks = [
  {
    week: "Week 1",
    theme: "Researching the AB-2229 Bill",
    icon: <BookOpen className="w-8 h-8 text-brand-600" />,
    description: "Learn the community health facts behind AB-2229, conduct easy research on pediatric care deserts, and outline your advocacy script!",
    topics: [
      "Understanding California Assembly Bill 2229 (AB-2229)",
      "How to research community medicine disparities and pediatric health statistics",
      "Writing a simple, persuasive speech script first draft",
      "Organizing ideas to capture attention and speak with force"
    ]
  },
  {
    week: "Week 2",
    theme: "Finishing the Script & Speaking Proud",
    icon: <FileText className="w-8 h-8 text-brand-600" />,
    description: "Finish writing your script and start learning the secrets of great public speaking, like using hand motions and speaking slowly.",
    topics: [
      "Polishing and finishing your speech script",
      "How to stand tall and hold your head high",
      "Learning cool tricks with hand motions and face expressions",
      "Finding the perfect speed and tone for your talk"
    ]
  },
  {
    week: "Week 3",
    theme: "Reviewing & Practicing Out Loud",
    icon: <Stethoscope className="w-8 h-8 text-brand-600" />,
    description: "Practice saying your speech out loud, finish up any details left over, and get ready for the camera!",
    topics: [
      "Reading your speech to a friend or family member",
      "Fixing any tricky words that are hard to say",
      "Getting kind feedback to make your talk even better",
      "Double checking all facts to be super confident"
    ]
  },
  {
    week: "Week 4",
    theme: "Recording & Sending Your Video",
    icon: <Presentation className="w-8 h-8 text-brand-600" />,
    description: "Record your final advocacy video! Send it to us so we can share it and help turn your ideas into real neighborhood rules.",
    topics: [
      "Setting up your camera and choosing a quiet spot",
      "Recording your final speech with a proud face",
      "Sending your video to our Med For Youth helpers",
      "How we share your ideas to help prop up new neighborhood rules"
    ]
  }
];

export function Curriculum() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Young Med Leaders Program</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">
          Our Simple 4-Week Class Plan
        </h1>
        <p className="text-lg text-slate-600">
          We have a super fun 4-week class for 5th to 10th graders. We play, learn science, and practice speaking up to make our world a happier, healthier place! Take a look at what we do every week below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {weeks.map((week, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full mix-blend-multiply blur-2xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                {week.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-1">{week.week}</div>
                <h3 className="text-2xl font-bold text-slate-900">{week.theme}</h3>
              </div>
            </div>
            
            <p className="text-slate-600 mb-6 relative z-10 leading-relaxed">
              {week.description}
            </p>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 relative z-10">
              <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">Key Topics</h4>
              <ul className="space-y-2">
                {week.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <Target className="w-4 h-4 text-brand-500 mt-1 flex-shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-brand-900 rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-600/40 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Want to join our fun classes?</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Save your spot for this summer! Come learn and help your neighborhood be happy, strong, and healthy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-brand-900 px-8 py-3 rounded-full font-bold hover:bg-brand-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Register Now
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border border-brand-300 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Contact Us for Details
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
