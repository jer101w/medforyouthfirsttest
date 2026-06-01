import { Gift } from "lucide-react";

export function FreeBanner() {
  return (
    <section className="bg-brand-50 py-16 border-y border-brand-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-brand-100 p-4 rounded-full text-brand-600">
            <Gift className="w-10 h-10" />
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-6">
          100% Free Program
        </h2>
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
          We believe that every student deserves the opportunity to learn, speak, and advocate. 
          That's why all our workshops, curriculum materials, and resources are provided entirely free of charge.
        </p>
      </div>
    </section>
  );
}
