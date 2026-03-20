import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types';

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Kit de Informes Psicopedagógicos',
    shortDescription: 'Plantillas profesionales para informes de evaluación psicopedagógica.',
    fullDescription: 'Kit completo con más de 15 plantillas de informes psicopedagógicos listos para usar. Incluye modelos para evaluación inicial, seguimiento, derivación y cierre de caso. Cada plantilla está diseñada con un formato profesional y adaptable a diferentes contextos clínicos y educativos. Ideal para estudiantes en práctica y profesionales recién recibidos que buscan organizar su trabajo de manera eficiente.',
    price: 4500,
    images: [
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=400&fit=crop'
    ],
    category: 'Informes'
  },
  {
    id: '2',
    name: 'Guía de Evaluación Neuropsicológica',
    shortDescription: 'Manual práctico para evaluaciones neuropsicológicas infantiles.',
    fullDescription: 'Guía exhaustiva que cubre los principales instrumentos de evaluación neuropsicológica para niños y adolescentes. Incluye protocolos de administración, interpretación de resultados y casos clínicos resueltos. Aborda áreas como atención, memoria, funciones ejecutivas, lenguaje y habilidades visuoespaciales. Un recurso indispensable para profesionales que trabajan con dificultades del neurodesarrollo.',
    price: 5200,
    images: [
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=400&fit=crop'
    ],
    category: 'Guías'
  },
  {
    id: '3',
    name: 'Pack Actividades TEA',
    shortDescription: 'Actividades y recursos para intervención con TEA.',
    fullDescription: 'Colección de más de 50 actividades diseñadas específicamente para la intervención psicopedagógica con personas dentro del espectro autista. Incluye materiales visuales, secuencias de actividades, tableros de comunicación y estrategias de regulación emocional. Cada actividad viene con instrucciones detalladas, objetivos terapéuticos y adaptaciones según el nivel de apoyo requerido.',
    price: 6800,
    images: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop'
    ],
    category: 'Actividades'
  },
  {
    id: '4',
    name: 'Protocolo Dificultades de Aprendizaje',
    shortDescription: 'Protocolo completo para detección e intervención en DA.',
    fullDescription: 'Protocolo estructurado para la detección temprana e intervención en dificultades de aprendizaje. Incluye screening inicial, batería de evaluación, plan de intervención por áreas (lectura, escritura, matemáticas) y modelos de seguimiento. Basado en evidencia científica y adaptado al contexto latinoamericano. Perfecto para trabajo en gabinetes escolares y consulta privada.',
    price: 5500,
    images: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=600&h=400&fit=crop'
    ],
    category: 'Protocolos'
  },
  {
    id: '5',
    name: 'Material Estimulación Cognitiva',
    shortDescription: 'Recursos para estimulación cognitiva en todas las edades.',
    fullDescription: 'Set completo de materiales para estimulación cognitiva aplicable desde la infancia hasta adultos mayores. Incluye ejercicios de memoria, atención, razonamiento lógico, flexibilidad cognitiva y velocidad de procesamiento. Los materiales están organizados por nivel de dificultad y vienen con planillas de registro de progreso. Ideal para uso clínico y trabajo domiciliario.',
    price: 4200,
    images: [
      'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop'
    ],
    category: 'Materiales'
  },
  {
    id: '6',
    name: 'Kit Orientación Vocacional',
    shortDescription: 'Herramientas para procesos de orientación vocacional.',
    fullDescription: 'Kit profesional para llevar adelante procesos de orientación vocacional con adolescentes y jóvenes adultos. Contiene cuestionarios de autoconocimiento, técnicas proyectivas, dinámicas grupales, guía de entrevistas y material informativo sobre carreras. Incluye también un módulo sobre orientación para personas con discapacidad y reorientación laboral.',
    price: 4800,
    images: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop'
    ],
    category: 'Orientación'
  }
];

interface ProductState {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: initialProducts,
      addProduct: (product: Product) => {
        set({ products: [...get().products, product] });
      },
      updateProduct: (id: string, updatedData: Partial<Product>) => {
        set({
          products: get().products.map(p =>
            p.id === id ? { ...p, ...updatedData } : p
          ),
        });
      },
      deleteProduct: (id: string) => {
        set({ products: get().products.filter(p => p.id !== id) });
      },
    }),
    {
      name: 'products-storage',
    }
  )
);
