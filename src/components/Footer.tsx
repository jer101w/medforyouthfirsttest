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
            <ul className="space-y-3 text-brand-200/80 text-sm">
              <li>
                <span className="block mb-1">Text us at:</span>
                <a
                  href="sms:5629720298"
                  className="hover:text-white transition-colors text-lg font-medium tracking-wide text-white"
                >
                  (562) 972-0298
                </a>
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
