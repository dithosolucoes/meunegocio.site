
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-50">
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">MeuNegocio.site</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Recursos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Preços
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-grow">
        {/* ACT I: The Spark */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  O site do seu negócio, pronto em segundos.
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl">
                  Comece digitando o nome da sua empresa e veja a mágica acontecer.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-slate-800 border-slate-700 text-white" placeholder="nome-do-seu-negocio" type="text" />
                  <Button type="submit">Continuar</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* ACT II: The Tangible Demonstration */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-slate-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simples. Poderoso. Mágico.</h2>
                <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl mt-4">Veja como sua ideia ganha vida em três passos.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="flex flex-col gap-16 py-8 md:py-16">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold">1. Escolha seu endereço</h3>
                        <p className="text-slate-400">Seu subdomínio é o seu novo endereço na web. Simples, direto e personalizado para o seu negócio.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold">2. Adicione sua identidade</h3>
                        <p className="text-slate-400">Faça o upload do seu logo e descreva sua empresa. Em segundos, sua marca ganha uma casa online.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold">3. Publique para o mundo</h3>
                        <p className="text-slate-400">Com um clique, seu site está no ar. Design moderno e responsivo, perfeito em qualquer dispositivo.</p>
                    </div>
                </div>
                <div className="sticky top-24 -mt-16">
                     <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-800">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800">
                           <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                           </div>
                           <div className="text-sm text-slate-400 bg-slate-800 px-2 py-1 rounded-md">https://<span className="font-bold text-white">seunegocio</span>.meunegocio.site</div>
                        </div>
                        <div className="p-8 bg-slate-950 aspect-[4/3] flex flex-col items-center justify-center text-center">
                            <div className="w-24 h-24 bg-indigo-500 rounded-full mb-6 flex items-center justify-center">
                                <MountainIcon className="w-12 h-12 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold mb-2">O Nome do Seu Negócio</h1>
                            <p className="text-slate-400 max-w-sm">A descrição da sua empresa apareceria aqui, cativando seus futuros clientes com uma mensagem clara e direta.</p>
                        </div>
                     </div>
                </div>
            </div>
          </div>
        </section>

        {/* ACT III: The Logical Decision */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Um preço. Tudo incluso.</h2>
                <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl mt-4">Sem taxas escondidas. Sem surpresas. Apenas um plano simples para o seu sucesso.</p>
            </div>
            <div className="mx-auto max-w-md">
                <div className="border border-slate-800 rounded-xl bg-slate-950/50 shadow-2xl p-8">
                    <h3 className="text-2xl font-bold text-center">Plano Pro</h3>
                    <div className="text-center my-6">
                        <span className="text-5xl font-extrabold">R$29</span>
                        <span className="text-base font-medium text-slate-400">/mês</span>
                    </div>
                    <ul className="space-y-4 text-slate-300">
                        <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2" />Subdomínio personalizado</li>
                        <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2" />Templates modernos</li>
                        <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2" />Edição fácil e intuitiva</li>
                        <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2" />Hospedagem inclusa</li>
                        <li className="flex items-center"><CheckIcon className="h-5 w-5 text-green-500 mr-2" />Suporte prioritário</li>
                    </ul>
                    <Button className="w-full mt-8" type="submit">Assinar Plano Pro</Button>
                </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-slate-950">
            <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Posso usar meu próprio domínio?</AccordionTrigger>
                        <AccordionContent>
                        Sim! Embora você comece com um subdomínio `.meunegocio.site`, o Plano Pro permite que você conecte seu próprio domínio (ex: www.suaempresa.com) facilmente.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Como funciona a edição do site?</AccordionTrigger>
                        <AccordionContent>
                        Após criar sua conta, você terá acesso a um painel de controle simples onde pode alterar o nome, a descrição, o logo e as cores do seu site a qualquer momento, sem precisar de código.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>O que acontece se eu cancelar?</AccordionTrigger>
                        <AccordionContent>
                        Se você cancelar o Plano Pro, seu site ficará indisponível, mas seus dados e configurações serão mantidos por 30 dias. Se decidir voltar dentro desse período, tudo estará como você deixou.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-4">
                        <AccordionTrigger>Existem outros custos?</AccordionTrigger>
                        <AccordionContent>
                        Não. O valor do Plano Pro é fixo e cobre todos os recursos listados. A única compra adicional que você pode fazer, opcionalmente, é um domínio próprio através de um registrador externo.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-slate-800">
        <p className="text-xs text-slate-500">
          © 2024 MeuNegocio.site. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
