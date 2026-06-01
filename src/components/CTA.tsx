import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-600">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Start Leading?
        </h2>
        <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join our 8-week curriculum and become the next generation of healthcare leaders in your own neighborhood.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register" className="w-full sm:w-auto bg-white text-brand-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-base transition-colors shadow-lg">
            Register Now
          </Link>
          <Link to="/contact" className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-400/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
