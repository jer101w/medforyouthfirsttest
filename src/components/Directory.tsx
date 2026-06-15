import React, { cloneElement } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Users, Phone, Calendar, ArrowRight, Info, Target, HelpCircle, Flame } from "lucide-react";

const links = [
  {
    title: "Our Team",
    description: "Meet the founder and advisors",
    icon: <Users className="w-6 h-6" />,
    href: "/team",
    isRoute: true,
  },
  {
    title: "Our Campaign",
    description: "Support our active AB-2229 campaign",
    icon: <Flame className="w-6 h-6" />,
    href: "/advocacy",
    isRoute: true,
  },
  {
    title: "Register Now",
    description: "Sign up for the YML Program",
    icon: <Calendar className="w-6 h-6" />,
    href: "/register",
    isRoute: true,
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team",
    icon: <Phone className="w-6 h-6" />,
    href: "/contact",
    isRoute: true,
  }
];

export function Directory() {
  return (
    <section className="py-12 bg-white relative overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.03)] z-30" id="directory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, index) => {
            const CardContent = () => (
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md hover:-translate-y-1 hover:border-brand-200 transition-all flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm flex-shrink-0">
                  {cloneElement(link.icon as React.ReactElement, { className: "w-5 h-5" })}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-900 mb-0.5 group-hover:text-brand-600 transition-colors flex items-center gap-2">
                    {link.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-600" />
                  </h4>
                  <p className="text-sm text-slate-600 leading-snug">{link.description}</p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                {link.isRoute ? (
                  <Link to={link.href} className="block h-full cursor-pointer focus:outline-none">
                    <CardContent />
                  </Link>
                ) : (
                  <a href={link.href} className="block h-full cursor-pointer focus:outline-none">
                    <CardContent />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
