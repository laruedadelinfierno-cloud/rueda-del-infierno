'use client'

import { createClient } from '@/lib/supabase/client'

export default function AuthButtons() {
  const supabase = createClient()

  const loginWithGoogle = () => supabase.auth.signInWithOAuth({ provider: 'google' })
  const loginWithGitHub = () => supabase.auth.signInWithOAuth({ provider: 'github' })

  return (
    <div className="flex flex-col gap-3">
      <button 
        onClick={loginWithGoogle}
        className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
      >
        Entrar con Google
      </button>
      <button 
        onClick={loginWithGitHub}
        className="bg-gray-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition border border-gray-700"
      >
        Entrar con GitHub
      </button>
    </div>
  )
}
