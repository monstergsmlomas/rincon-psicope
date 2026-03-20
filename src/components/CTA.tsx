import { Sparkles, ArrowRight } from 'lucide-react';

export default function CTA() {
  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">Comienza hoy</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Lista para transformar tu práctica profesional?
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Únete a más de 500 profesionales que ya confían en nuestros materiales para destacar en su carrera.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToProducts}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-rose-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-lg group"
        >
          Ver todos los productos
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Pago seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Descarga inmediata</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Soporte incluido</span>
          </div>
        </div>
      </div>
    </section>
  );
}
