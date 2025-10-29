'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const SplineBackgroundComponent = dynamic(
  () => import('@splinetool/react-spline').then((mod) => mod.default),
  { 
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 0, background: '#000' }}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-white text-lg">Carregando cena 3D...</div>
        </div>
      </div>
    )
  }
)

export function SplineBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center bg-black">
          <span className="text-white">Carregando...</span>
        </div>
      }>
        <SplineBackgroundComponent 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </Suspense>
    </div>
  )
}

