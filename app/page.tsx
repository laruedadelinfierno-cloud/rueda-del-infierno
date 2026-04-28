import { createServerClientInstance } from '@/lib/supabase/server';
import AuthButtons from './components/AuthButtons';
import Wheel from './components/Wheel';

export default async function Home() {
  const supabase = await createServerClientInstance();
  
  // Obtenemos la sesión del usuario desde el servidor
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-red-950 text-white font-sans">
      {/* Título Estilizado */}
      <h1 className="text-5xl md:text-7xl font-black mb-8 text-red-600 uppercase tracking-tighter text-center drop-shadow-[0_5px_15px_rgba(255,0,0,0.4)]">
        La Rueda <br /> <span className="text-white">del</span> Infierno
      </h1>
      
      <div className="w-full max-w-md bg-black/60 backdrop-blur-md p-10 rounded-2xl border-2 border-red-900 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {session ? (
          <div className="text-center">
            <div className="mb-6">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Alma Identificada</p>
              <p className="text-xl font-mono text-red-400">{session.user.email}</p>
            </div>
            
            <div className="space-y-4">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-900/40">
                GIRAR LA RUEDA
              <Wheel />
              
              <form action="/auth/signout" method="post">
                <button className="text-gray-500 hover:text-gray-300 text-sm underline transition">
                  Cerrar Sesión
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-8">
              <p className="text-2xl font-bold mb-2">¿Te atreves?</p>
              <p className="text-gray-400">Inicia sesión para registrar tus pecados y premios.</p>
            </div>
            
            {/* Componente de botones que crearemos en el siguiente paso */}
            <AuthButtons />
            
            <p className="mt-8 text-xs text-red-900 font-bold uppercase tracking-widest animate-pulse">
              El destino te espera
            </p>
          </div>
        )}
      </div>
      
      {/* Decoración de fondo simple */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none"></div>
    </main>
  );
}
