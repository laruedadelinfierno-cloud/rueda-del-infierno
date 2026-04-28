// 1. Corregimos el nombre de la importación para que coincida con tu archivo server.ts
import { createServerClientInstance } from '@/lib/supabase/server';

export default async function Home() {
  // 2. Ahora sí usamos la función que importamos
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
            <p className="mb-4 text-xl">Bienvenido, <span className="text-red-400 font-mono">{session.user.email}</span></p>
            <button className="bg-red-600 px-6 py-2 rounded-full font-bold hover:bg-red-700 transition shadow-lg shadow-red-900/50">
              Empezar Desafío
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-6 text-gray-300">Debes iniciar sesión para enfrentar tu destino</p>
            <div className="flex flex-col gap-4">
               <p className="text-sm italic text-red-400/60">Configura el login en tu componente de cliente</p>
               {/* Pronto añadiremos aquí los botones reales de Google/GitHub */}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
