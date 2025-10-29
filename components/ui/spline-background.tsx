'use client'

import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />,
})

export function SplineBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <Spline 
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
      />
    </div>
  )
}

