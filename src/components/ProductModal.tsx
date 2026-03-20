import { useState } from 'react';
import { X, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-rose-50 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="grid md:grid-cols-2 h-full">
          {/* Image Carousel */}
          <div className="relative bg-gradient-to-br from-rose-50 to-purple-50 h-64 md:h-auto">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {/* Carousel Controls */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-rose-500 w-6'
                          : 'bg-white/70 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Thumbnails */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? 'border-rose-500 shadow-lg'
                      : 'border-white/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
            {/* Category */}
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-rose-100 to-purple-100 text-rose-600 text-sm font-semibold rounded-full mb-4">
              {product.category}
            </span>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h2>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Descripción</h3>
              <p className="text-gray-600 leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Incluye</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                  Acceso inmediato tras la compra
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                  Material en formato digital (PDF)
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                  Actualizaciones gratuitas
                </li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-lg"
            >
              <ShoppingCart className="w-6 h-6" />
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
