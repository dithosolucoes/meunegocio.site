import { notFound } from 'next/navigation';

// Aqui vamos buscar os dados do site no Supabase
async function getSiteData(site: string) {
  // Por enquanto, vamos retornar dados de exemplo
  if (site === 'demo') {
    return {
      name: 'Site de Demonstração',
      description: 'Este é um site de demonstração gerado dinamicamente.',
    };
  }

  // No futuro, aqui faremos a busca no Supabase
  // const { data } = await supabase.from('sites').select('*').eq('subdomain', site).single();
  // if (!data) notFound();
  // return data;
  
  return null;
}

export default async function SitePage({ params }: { params: { site: string } }) {
  const data = await getSiteData(params.site);

  if (!data) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <div>
          <h1 className="text-4xl font-bold text-center">{data.name}</h1>
          <p className="text-center mt-4">{data.description}</p>
        </div>
      </div>
    </main>
  );
}
