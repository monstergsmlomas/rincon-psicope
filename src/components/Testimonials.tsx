import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Camila R.',
    role: 'Estudiante avanzada',
    content: 'El kit de informes me dio muchísima seguridad en mis primeras prácticas. Súper recomendado para quien está empezando.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Sofía M.',
    role: 'Recién recibida',
    content: 'Las plantillas son claras y fáciles de adaptar a cada caso. Me ahorraron muchísimo tiempo al principio.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Valentina G.',
    role: 'Práctica clínica',
    content: 'Me ayudó a organizar mis evaluaciones de forma profesional. El material es excelente y muy completo.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Martina L.',
    role: 'Estudiante',
    content: 'Sentí que por fin tenía herramientas reales y no solo teoría. Vale cada peso invertido.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-4">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-gray-700">Lo que dicen nuestros clientes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Testimonios de{' '}
            <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              profesionales
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-rose-50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-rose-100"
                />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-rose-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
