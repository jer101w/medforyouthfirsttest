import { Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100 py-16 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="/medforyouthhorizontal.png"
                alt="Med For Youth Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-brand-200/80 text-sm leading-relaxed mb-6">
              Bridging the gap between medical science and community advocacy
              for the next generation of healthcare leaders.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Programs
            </h4>
            <ul className="space-y-3 text-brand-200/80 text-sm">
              <li>
                <a
                  href="#programs"
                  className="hover:text-white transition-colors"
                >
                  8-Week Curriculum
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:text-white transition-colors"
                >
                  Speaking Workshops
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:text-white transition-colors"
                >
                  Digital Advocacy Videos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="space-y-3 text-brand-200/80 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="hover:text-white transition-colors"
                >
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-4 text-brand-200/80 text-sm">
              <li>
                <span className="block mb-1 text-xs uppercase tracking-wider opacity-80">Text us at:</span>
                <span className="text-xl font-bold tracking-wide text-white">
                  (562) 972-0298
                </span>
              </li>
              <li>
                <span className="block mb-1 text-xs uppercase tracking-wider opacity-80">Email us at:</span>
                <a href="mailto:contact@medforyouth.org" className="text-base font-medium text-white hover:text-brand-300 transition-colors break-all">
                  contact@medforyouth.org
                </a>
              </li>
              <li className="pt-2">
                <span className="block mb-3 text-xs uppercase tracking-wider opacity-80">Follow us:</span>
                <div className="flex gap-4">
                  <a href="#" className="bg-brand-800 p-2.5 rounded-lg text-white hover:bg-brand-700 hover:text-brand-300 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-brand-800 p-2.5 rounded-lg text-white hover:bg-brand-700 hover:text-brand-300 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-brand-800 p-2.5 rounded-lg text-white hover:bg-brand-700 hover:text-brand-300 transition-colors flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-200/60">
          <p>
            &copy; {new Date().getFullYear()} Med For Youth. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
