import { createClient } from '@/lib/supabase/server';

export default async function Home() {
  const supabase = await createServerClientInstance();
  
  // Intentamos obtener la sesión del usuario
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-red-950 text-white">
      <h1 className="text-6xl font-bold mb-8 text-red-500 uppercase tracking-tighter">
        La Rueda del Infierno
      </h1>
      
      <div className="bg-black/40 p-8 rounded-xl border border-red-800 shadow-2xl">
        {session ? (
          <div className="text-center">
            <p className="mb-4">Bienvenido, {session.user.email}</p>
            <button className="bg-red-600 px-6 py-2 rounded-full font-bold hover:bg-red-700 transition">
              Empezar Desafío
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-6 text-gray-300">Debes iniciar sesión para enfrentar tu destino</p>
            <div className="flex gap-4">
               {/* Aquí irán tus botones de Auth que configuramos en Supabase */}
               <p className="text-sm italic">Configura el login en tu componente de cliente</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
