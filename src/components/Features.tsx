import { Download, Shield, Headphones, RefreshCw, FileCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: Download,
    title: 'Descarga Inmediata',
    description: 'Accede a tu material al instante después de la compra. Sin esperas.',
    color: 'from-rose-400 to-pink-500'
  },
  {
    icon: FileCheck,
    title: 'Material Profesional',
    description: 'Diseñado por profesionales con años de experiencia en el campo.',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    icon: RefreshCw,
    title: 'Actualizaciones Gratis',
    description: 'Recibe mejoras y actualizaciones sin costo adicional.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Pago Seguro',
    description: 'Transacciones protegidas con MercadoPago o transferencia.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Headphones,
    title: 'Soporte Personalizado',
    description: 'Te acompañamos si tienes dudas sobre el uso del material.',
    color: 'from-orange-400 to-amber-500'
  },
  {
    icon: Clock,
    title: 'Ahorra Tiempo',
    description: 'Material listo para usar, adaptable a cada contexto.',
    color: 'from-pink-400 to-rose-500'
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ¿Por qué{' '}
            <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              elegirnos
            </span>
            ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos enfocamos en brindarte la mejor experiencia y materiales de calidad
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100 hover:border-rose-100"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
