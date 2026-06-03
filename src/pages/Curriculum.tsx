import { motion } from "motion/react";
import { BookOpen, Calendar, Clock, Target, ArrowRight, FileText, Stethoscope, Presentation } from "lucide-react";
import { Link } from "react-router-dom";

const weeks = [
  {
    week: "Week 1",
    theme: "Introduction to Public Health",
    icon: <BookOpen className="w-8 h-8 text-brand-600" />,
    description: "Understanding the basics of community wellness, epidemiology, and the fundamental principles of health advocacy.",
    topics: [
      "What is Public Health?",
      "Social Determinants of Health",
      "Identifying Community Needs",
      "Introduction to Health Equity"
    ]
  },
  {
    week: "Week 2",
    theme: "Curriculum & Research",
    icon: <FileText className="w-8 h-8 text-brand-600" />,
    description: "Evaluating clinical information, separating fact from fiction, and learning how to conduct basic medical research.",
    topics: [
      "Navigating Medical Literature",
      "Understanding Clinical Trials Basics",
      "Identifying Reliable Sources",
      "Drafting Research Summaries"
    ]
  },
  {
    week: "Week 3",
    theme: "Medical Advisor Session",
    icon: <Stethoscope className="w-8 h-8 text-brand-600" />,
    description: "Learning directly from a medical professional on a niche topic. Students get to ask questions and explore real-world cases.",
    topics: [
      "Guest Speaker Presentation",
      "Interactive Q&A Session",
      "Case Study Analysis",
      "Career Pathways in Medicine"
    ]
  },
  {
    week: "Week 4",
    theme: "Delivering Your Speech",
    icon: <Presentation className="w-8 h-8 text-brand-600" />,
    description: "Crafting legislative proposals and delivering powerful advocacy speeches designed to create real community impact.",
    topics: [
      "Public Speaking Fundamentals",
      "Structuring an Advocacy Speech",
      "Writing Legislative Proposals",
      "Final Pitch Presentations"
    ]
  }
];

export function Curriculum() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Young Med Leaders Program</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">
          Detailed Curriculum
        </h1>
        <p className="text-lg text-slate-600">
          Our intensive 4-week program is designed for 5th to 8th graders to transform them into confident public health advocates. Explore the week-by-week breakdown below.
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
          <h2 className="text-3xl font-bold mb-4">Ready to join our program?</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Secure your spot in our upcoming summer session and take the first step towards becoming a healthcare leader in your community.
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
