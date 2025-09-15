import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              MeuNegocio.site
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900">Recursos</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Preços</Link>
              <Link href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
            </nav>
            <Link 
              href="/dashboard" 
              className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Crie o site do seu negócio em minutos.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
              Uma plataforma simples e poderosa para você ter sua presença online com um subdomínio personalizado.
            </p>
            <Link 
              href="/dashboard"
              className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Crie seu site grátis
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">Tudo que você precisa para começar</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="text-center">
                <h3 className="text-xl font-bold">Subdomínio Personalizado</h3>
                <p className="mt-2 text-gray-600">suaempresa.meunegocio.site</p>
              </div>
              {/* Feature 2 */}
              <div className="text-center">
                <h3 className="text-xl font-bold">Edição Fácil</h3>
                <p className="mt-2 text-gray-600">Atualize seu nome e descrição a qualquer momento.</p>
              </div>
              {/* Feature 3 */}
              <div className="text-center">
                <h3 className="text-xl font-bold">Design Moderno</h3>
                <p className="mt-2 text-gray-600">Templates limpos e responsivos para todos os dispositivos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Planos e Preços</h2>
             <div className="mt-12 max-w-md mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="p-8">
                    <h3 className="text-2xl font-bold">Plano Pro</h3>
                    <p className="mt-4 text-gray-600">Todos os recursos para você decolar.</p>
                    <div className="mt-6">
                        <span className="text-4xl font-extrabold">R$29</span>
                        <span className="text-base font-medium text-gray-600">/mês</span>
                    </div>
                    <Link href="/dashboard" className="mt-8 block w-full bg-indigo-600 border border-transparent rounded-md py-3 text-base font-medium text-white hover:bg-indigo-700">
                      Assinar Plano Pro
                    </Link>
                </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">Perguntas Frequentes</h2>
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="text-lg font-medium">Posso usar meu próprio domínio?</h3>
                <p className="mt-2 text-gray-600">Em breve! Estamos trabalhando para permitir que você conecte seu próprio domínio (ex: www.suaempresa.com).</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">O que acontece se eu cancelar?</h3>
                <p className="mt-2 text-gray-600">Seu site ficará indisponível, mas seus dados serão mantidos por 30 dias caso decida voltar.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} MeuNegocio.site. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
