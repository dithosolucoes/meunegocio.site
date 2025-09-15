import { supabase } from '../../../lib/supabase';
import { notFound } from 'next/navigation';

async function getSiteData(site: string) {
  const { data } = await supabase
    .from('sites')
    .select('*')
    .eq('subdomain', site)
    .single();
    
  if (!data) {
    notFound();
  }

  return data;
}

export default async function SitePage({ params }: { params: { site: string } }) {
  const data = await getSiteData(params.site);

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
