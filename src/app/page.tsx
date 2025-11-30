import { BookOpen, Facebook, Instagram, Twitter } from "lucide-react";

export default function Home() {
  const ebooks = [
    {
      id: 1,
      title: "Como Dormir Rápido",
      description: "Descubra técnicas comprovadas para adormecer em minutos e ter noites de sono profundo e reparador.",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=600&fit=crop",
      link: "https://pay.kirvano.com/8fefb3e7-11f4-4f25-ad6e-ad64063fce5b"
    },
    {
      id: 2,
      title: "Guia de Sobrevivência Extrema",
      description: "Aprenda habilidades essenciais para sobreviver em situações extremas e ambientes desafiadores.",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=600&fit=crop",
      link: "https://pay.kirvano.com/73f77e12-1142-4453-9569-63c3327c07b5"
    },
    {
      id: 3,
      title: "Como Estudar Para a Prova",
      description: "Métodos eficazes de estudo que vão transformar seu desempenho acadêmico e garantir ótimas notas.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=600&fit=crop",
      link: "https://pay.kirvano.com/92288c08-33f3-4e3e-b875-f69d9b8ef81c"
    },
    {
      id: 4,
      title: "Como Emagrecer Rápido",
      description: "Estratégias saudáveis e sustentáveis para perder peso de forma eficiente e manter os resultados.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=600&fit=crop",
      link: "https://pay.kirvano.com/c3fec72d-3d99-4855-9546-0a4284cb3514"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-4 shadow-xl">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="w-10 h-10" />
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              Loja Oficial de eBooks
            </h1>
          </div>
          <p className="text-center mt-3 text-blue-100 text-lg">
            Conhecimento que transforma vidas
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ebooks.map((ebook) => (
              <div
                key={ebook.id}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl flex flex-col"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Oferta!
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {ebook.title}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                    {ebook.description}
                  </p>

                  {/* Button */}
                  <a
                    href={ebook.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-center font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-lg"
                  >
                    COMPRAR AGORA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-6">
            {/* Social Media */}
            <div className="flex gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} Loja Oficial de eBooks. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Transformando conhecimento em sucesso
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
