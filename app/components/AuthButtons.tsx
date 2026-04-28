'use client'

import { createClient } from '@/lib/supabase/client'

export default function AuthButtons() {
  const supabase = createClient()

  // Funciones para iniciar sesión
  const loginWithGoogle = () => supabase.auth.signInWithOAuth({ 
    provider: 'google',
    options: { redirectTo: `${window.location.origin}/auth/callback` }
  })
  
  const loginWithGitHub = () => supabase.auth.signInWithOAuth({ 
    provider: 'github',
    options: { redirectTo: `${window.location.origin}/auth/callback` }
  })

  return (
    <div className="flex flex-col gap-3">
      <button 
        onClick={loginWithGoogle}
        className="w-full bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
      >
        Entrar con Google
      </button>
      <button 
        onClick={loginWithGitHub}
        className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors border border-gray-700 flex items-center justify-center gap-2"
      >
        Entrar con GitHub
      </button>
    </div>
  )
}
