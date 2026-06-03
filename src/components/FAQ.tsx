import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Who is the target audience for the workshops?",
    answer: "Our workshops and the Young Med Leaders Program (our 4-week summer program) are designed specifically for 5th to 8th graders who want to learn about medical science and public speaking"
  },
  {
    question: "Do students need prior medical knowledge?",
    answer: "Not at all! We teach everything from the ground up. Students will learn how to properly research medical science and build clinical literacy during the program"
  },
  {
    question: "What happens after the Young Med Leaders Program?",
    answer: "Students turn their learning into action. We help them produce health education videos based on their advocacy speeches, which we then send to local governments or boards to help propose and pass the propositions they created"
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-accent-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">FAQ</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-900 mb-6">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={false}
                className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-brand-200 bg-white shadow-sm' : 'border-white bg-white/60 hover:bg-white'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-brand-900 text-lg pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-brand-600 text-white' : 'bg-brand-100 text-brand-600'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 pt-2 text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
