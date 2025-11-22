import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, TrendingUp, Users, DollarSign, Zap, Target, Clock } from 'lucide-react';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // El Equipo
    {
      content: (
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-8">El Equipo</div>
            <h2 className="text-5xl font-light text-white mb-16 leading-tight">
              Tres fundadores.<br/>
              Un problema identificado.
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="bg-zinc-900 p-8 border border-zinc-800">
              <div className="w-20 h-20 bg-cyan-400/10 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-10 h-10 text-cyan-400" />
              </div>
              <div className="text-sm text-cyan-400 uppercase tracking-wider mb-3">Fundador 1 · CEO</div>
              <h3 className="text-xl text-white mb-4 font-light">Ilena Alfonso</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Matemática e ingeniera civil. Experiencia previa fundando empresas de software y automatizando procesos.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 border border-zinc-800">
              <div className="w-20 h-20 bg-cyan-400/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-10 h-10 text-cyan-400" />
              </div>
              <div className="text-sm text-cyan-400 uppercase tracking-wider mb-3">Fundador 2 · CTO</div>
              <h3 className="text-xl text-white mb-4 font-light">Rafael Campo</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ingeniero de software. Experiencia en desarrollo backend e infraestructura cloud.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 border border-zinc-800">
              <div className="w-20 h-20 bg-cyan-400/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-cyan-400" />
              </div>
              <div className="text-sm text-cyan-400 uppercase tracking-wider mb-3">Fundador 3 · CPO</div>
              <h3 className="text-xl text-white mb-4 font-light">Omar Crespo</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lead engineer at Dapta. Ex-Rappi. Ex-Habi. Hace tecnología compleja simple.
              </p>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <p className="text-xl text-gray-400 leading-relaxed">
              <span className="text-white">Experiencia en ventas</span> + <span className="text-white">Capacidad técnica</span> + <span className="text-white">Validación del problema</span>
            </p>
          </div>
        </div>
      ),
      bg: "bg-black"
    },

    // Portada
    {
      content: (
        <div className="h-full flex flex-col justify-between">
          <div className="flex-1 flex items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="text-[120px] font-light leading-none tracking-tighter text-white">
                  MAZK
                </div>
                <div className="h-1 w-32 bg-cyan-400 mt-4"></div>
              </div>
              <div className="text-3xl text-gray-400 font-light max-w-2xl leading-relaxed">
                Clona tu voz. Cierra más ventas. <br/>
                Escala sin límites.
              </div>
            </div>
          </div>
          <div className="text-sm text-cyan-400 uppercase tracking-widest">
            Investor Pitch · 2025
          </div>
        </div>
      ),
      bg: "bg-black"
    },
    
    // La Historia - El Problema Vivido
    {
      content: (
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-8">El Problema</div>
            <h2 className="text-5xl font-light text-white mb-12 leading-tight">
              "Hace un año teníamos<br/>300 leads listos para comprar"
            </h2>
          </div>
          
          <div className="space-y-8 mb-16">
            <div className="border-l-2 border-cyan-400 pl-8 py-4">
              <p className="text-2xl text-gray-300 leading-relaxed">
                Solo pueden atender 10 llamadas al día
              </p>
            </div>
            
            <div className="border-l-2 border-gray-700 pl-8 py-4">
              <p className="text-2xl text-gray-300 leading-relaxed">
                Los call centers destruyen la tasa de conversión: de 28% a 4%
              </p>
            </div>
            
            <div className="border-l-2 border-gray-700 pl-8 py-4">
              <p className="text-2xl text-gray-300 leading-relaxed">
                Entrenar vendedores toma 3 meses y nunca replican el mismo resultado
              </p>
            </div>

            <div className="pt-8">
              <div className="text-6xl font-light text-cyan-400">$840K/año</div>
              <p className="text-xl text-gray-500 mt-3">Dejados sobre la mesa. Solo por no poder atender llamadas.</p>
            </div>
          </div>
        </div>
      ),
      bg: "bg-zinc-950"
    },

    // El Problema - Quién lo tiene
    {
      content: (
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-8">El Problema</div>
            <h2 className="text-5xl font-light text-white mb-16 leading-tight">
              ¿Quién sufre<br/>este problema?
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="space-y-4">
              <div className="text-6xl font-extralight text-cyan-400">50K+</div>
              <h3 className="text-xl text-white font-light">Influencers LATAM</h3>
              <p className="text-gray-500 leading-relaxed">
                Vendiendo cursos y mentorías de $2K-$50K
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-6xl font-extralight text-cyan-400">120K+</div>
              <h3 className="text-xl text-white font-light">Coaches & Consultores</h3>
              <p className="text-gray-500 leading-relaxed">
                Con programas high-ticket personalizados
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-6xl font-extralight text-cyan-400">$325B</div>
              <h3 className="text-xl text-white font-light">Mercado Global</h3>
              <p className="text-gray-500 leading-relaxed">
                Coaching y educación online, creciendo 20% anual
              </p>
            </div>
          </div>
        </div>
      ),
      bg: "bg-zinc-950"
    },

    // Las Fricciones
    {
      content: (
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-8">Las Fricciones</div>
            <h2 className="text-5xl font-light text-white mb-16 leading-tight">
              Dos opciones.<br/>
              Ambas terribles.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-16 mb-16">
            <div className="space-y-6">
              <div className="text-sm text-gray-600 uppercase tracking-wider mb-4">Si vendes tú mismo</div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">Solo 8-10 llamadas/día máximo</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">Burnout físico y mental</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">Leads que se enfrían</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">Eres el cuello de botella</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-sm text-gray-600 uppercase tracking-wider mb-4">Si contratas vendedores</div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">Conversión cae de 30% a 5%</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">Entrenar toma 2-4 meses</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">Nunca replican tu estilo</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">Rotación cada 6 meses</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 border border-zinc-800">
            <p className="text-2xl text-gray-400 leading-relaxed">
              En ventas high-ticket, la <span className="text-white">personalización es TODO</span>. Los leads compran transformación, no productos.
            </p>
          </div>
        </div>
      ),
      bg: "bg-black"
    },

    // La Plata Sobre la Mesa
    {
      content: (
        <div className="h-full flex items-center justify-center">
          <div className="max-w-4xl w-full space-y-16">
            <div className="text-center space-y-6">
              <div className="text-sm text-gray-500 uppercase tracking-widest">La Plata Sobre la Mesa</div>
              <h2 className="text-5xl font-light text-white leading-tight">
                Hagamos las cuentas
              </h2>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-12 space-y-8">
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-6">Caso real: Influencer con producto de $3,000</div>
              
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="text-sm text-gray-600 uppercase tracking-wider">Situación Actual</div>
                  <div className="space-y-2 text-gray-400">
                    <p>500 leads calificados/mes</p>
                    <p>Solo atiende 200 llamadas</p>
                    <p>30% de conversión</p>
                    <p className="pt-4 text-2xl text-white font-light">= $180K/mes</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-sm text-cyan-400 uppercase tracking-wider">Con Mazk</div>
                  <div className="space-y-2 text-gray-400">
                    <p>500 leads calificados/mes</p>
                    <p>Atiende TODOS (500 llamadas)</p>
                    <p>30% de conversión (mantiene calidad)</p>
                    <p className="pt-4 text-2xl text-cyan-400 font-light">= $450K/mes</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-zinc-800 text-center">
                <div className="text-5xl font-light text-cyan-400 mb-2">$270K/mes</div>
                <p className="text-gray-500">dejados sobre la mesa</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bg: "bg-zinc-950"
    },

    // La Solución - Hero
    {
      content: (
        <div className="h-full flex items-center justify-center">
          <div className="text-center space-y-12">
            <div className="text-8xl font-light text-white leading-tight">
              La solución:<br/>
              <span className="text-cyan-400">Clonación digital</span>
            </div>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Replicamos tu voz, personalidad y técnica de ventas usando IA.<br/>
              No es un bot. Es literalmente TÚ, escalado 50x.
            </p>
          </div>
        </div>
      ),
      bg: "bg-black"
    },

    // Cómo Funciona - Parte 1
    {
      content: (
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-8">Cómo Funciona</div>
            <h2 className="text-5xl font-light text-white mb-20">Setup inicial</h2>
          </div>

          <div className="space-y-12 mb-16">
            <div className="border-l-2 border-cyan-400 pl-8 py-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-cyan-400 uppercase tracking-wider">Paso 1 · 30 minutos</div>
                <Clock className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-3xl font-light text-white mb-4">Clonación de voz</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Cliente graba 30 minutos siguiendo prompts. Clonamos voz con 98%+ accuracy. Tono, cadencia, énfasis, respiración.
              </p>
            </div>

            <div className="border-l-2 border-cyan-400 pl-8 py-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-cyan-400 uppercase tracking-wider">Paso 2 · 2-3 horas</div>
                <Clock className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-3xl font-light text-white mb-4">Entrenamiento de personalidad</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Subimos transcripciones de mejores llamadas. IA aprende estilo: manejo de objeciones, storytelling, cierre.
              </p>
            </div>

            <div className="border-l-2 border-cyan-400 pl-8 py-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-cyan-400 uppercase tracking-wider">Paso 3 · Por lead</div>
                <Clock className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-3xl font-light text-white mb-4">Contextualización</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Por cada lead: intereses, objeciones previas, presupuesto, historial. Cada llamada ultra-personalizada.
              </p>
            </div>
          </div>
        </div>
      ),
      bg: "bg-zinc-950"
    },

    // Cómo Funciona - Parte 2 (La Magia)
    {
      content: (
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-8">La Magia</div>
            <h2 className="text-5xl font-light text-white mb-16 leading-tight">
              Durante la llamada<br/>
              <span className="text-gray-600">(tiempo real)</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-zinc-900 p-8 border border-zinc-800">
                <div className="text-cyan-400 text-sm uppercase tracking-wider mb-4">La IA analiza</div>
                <ul className="space-y-3 text-gray-400">
                  <li>→ Sentimiento (¿emocionado o dudoso?)</li>
                  <li>→ Objeciones (¿precio, tiempo, credibilidad?)</li>
                  <li>→ Señales de compra (¿listo para cerrar?)</li>
                  <li>→ Contexto específico del lead</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-8 border border-zinc-800">
                <div className="text-cyan-400 text-sm uppercase tracking-wider mb-4">Y genera</div>
                <ul className="space-y-3 text-gray-400">
                  <li>→ Respuestas adaptadas segundo a segundo</li>
                  <li>→ Manejo personalizado de objeciones</li>
                  <li>→ Storytelling contextual</li>
                  <li>→ Cierre en el momento exacto</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center">
              <div className="space-y-8 w-full">
                <div className="text-center p-8 bg-cyan-400/5 border border-cyan-400/20 rounded-lg">
                  <Phone className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <p className="text-2xl text-white font-light mb-2">20-40 minutos</p>
                  <p className="text-gray-500">Conversación natural y fluida</p>
                </div>

                <div className="text-center">
                  <p className="text-xl text-gray-400 leading-relaxed">
                    El lead siente <span className="text-white">conexión real</span>.<br/>
                    Sus dudas se resuelven.<br/>
                    Es tratado como individuo.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <p className="text-gray-600 text-sm">Mientras el vendedor duerme, crea contenido, o cierra otros deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bg: "bg-black"
    },

    // Modelo de Negocio
    {
      content: (
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-8">Modelo de Negocio</div>
            <h2 className="text-5xl font-light text-white mb-16 leading-tight">
              Simple. Escalable.<br/>
              Altamente rentable.
            </h2>
          </div>

          <div className="space-y-8 mb-16">
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-8 border border-zinc-800">
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">Setup Único</div>
                <div className="text-5xl font-light text-cyan-400 mb-2">$2K</div>
                <p className="text-gray-500 text-sm">Clonación + onboarding 1-on-1</p>
              </div>

              <div className="bg-zinc-900 p-8 border border-zinc-800">
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">Comisión por Venta</div>
                <div className="text-5xl font-light text-cyan-400 mb-2">3%</div>
                <p className="text-gray-500 text-sm">De cada lead cerrado exitosamente</p>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 border border-zinc-800">
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-4 text-center">Ejemplo de Ingresos</div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm text-gray-600 mb-2">Cliente vende producto de $3K</div>
                  <div className="text-2xl font-light text-white">$90</div>
                  <p className="text-gray-500 text-xs mt-1">por venta cerrada</p>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-2">100 ventas/mes</div>
                  <div className="text-2xl font-light text-white">$9K</div>
                  <p className="text-gray-500 text-xs mt-1">ingresos mensuales</p>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-2">Por cliente activo</div>
                  <div className="text-2xl font-light text-cyan-400">$108K</div>
                  <p className="text-gray-500 text-xs mt-1">ingresos anuales</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-sm text-gray-600 uppercase tracking-wider mb-2">Gross Margin</div>
                <div className="text-4xl font-light text-cyan-400">95%+</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 uppercase tracking-wider mb-2">Modelo</div>
                <div className="text-2xl font-light text-white">Pay-per-sale</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 uppercase tracking-wider mb-2">Escalabilidad</div>
                <div className="text-2xl font-light text-cyan-400">Sin límites</div>
              </div>
            </div>

            <div className="bg-black p-8 border border-zinc-800 mt-8">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-sm text-gray-600 mb-2">Año 1 · 50 clientes</div>
                  <div className="text-3xl font-light text-white">$5.4M</div>
                  <p className="text-gray-500 text-xs mt-1">(50 clientes × $108K)</p>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-2">Año 2 · 300 clientes</div>
                  <div className="text-3xl font-light text-white">$32.4M</div>
                  <p className="text-gray-500 text-xs mt-1">(300 clientes × $108K)</p>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-2">Año 3 · 1K clientes</div>
                  <div className="text-3xl font-light text-cyan-400">$108M</div>
                  <p className="text-gray-500 text-xs mt-1">(1K clientes × $108K)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bg: "bg-black"
    },

    // Visión / Cierre
    {
      content: (
        <div className="h-full flex items-center justify-center">
          <div className="text-center max-w-4xl space-y-16">
            <div className="space-y-8">
              <p className="text-6xl font-light text-white leading-tight">
                El futuro de las ventas<br/>
                es <span className="italic text-cyan-400">personal</span> y <span className="italic text-cyan-400">escalable</span>
              </p>
              <p className="text-2xl text-gray-500 font-light leading-relaxed">
                Cada influencer, coach y vendedor elite<br/>
                merece tener su gemelo digital.<br/><br/>
                Mazk hace que eso sea posible.
              </p>
            </div>

            <div className="pt-12 space-y-8">
              <div className="text-5xl font-light text-white">
                ¿Están dentro?
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="text-gray-500">Contacto</div>
                <div className="text-xl text-white">hello@mazk.ai</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bg: "bg-black"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col pb-24">
      {/* Main Slide */}
      <div className={`flex-1 ${slides[currentSlide].bg} p-16 transition-all duration-700`}>
        <div className="max-w-[1400px] mx-auto h-full">
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Navigation - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-900 px-16 py-6 z-50">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>

          <div className="flex items-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group"
              >
                <div className={`h-[2px] transition-all ${
                  index === currentSlide
                    ? 'bg-cyan-400 w-12'
                    : 'bg-zinc-800 w-8 group-hover:bg-zinc-600'
                }`}></div>
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;

