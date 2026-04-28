'use client'
import { useState } from 'react'

export default function Wheel() {
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const prizes = ["Castigo Eterno", "Indulto", "Más Pecados", "Suerte Infernal", "Vacío", "Recompensa"]

  const spin = () => {
    if (spinning) return
    
    setSpinning(true)
    setResult(null)

    // Simulamos el giro
    setTimeout(() => {
      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)]
      setResult(randomPrize)
      setSpinning(false)
    }, 3000) // Tarda 3 segundos en "girar"
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className={`w-48 h-48 rounded-full border-8 border-red-600 flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(255,0,0,0.5)] ${spinning ? 'animate-spin' : ''}`}>
        🔥
      </div>
      
      <button 
        onClick={spin}
        disabled={spinning}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg disabled:bg-gray-700"
      >
        {spinning ? 'EL DESTINO SE DECIDE...' : 'GIRAR LA RUEDA'}
      </button>

      {result && (
        <div className="mt-4 p-4 bg-white/10 rounded border border-red-500 animate-bounce">
          <p className="text-xl font-bold text-red-400">Resultado: {result}</p>
        </div>
      )}
    </div>
  )
}
