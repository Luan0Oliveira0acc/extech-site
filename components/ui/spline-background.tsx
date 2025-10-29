'use client'

import Spline from '@splinetool/react-spline'

export function SplineBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <Spline 
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
      />
    </div>
  )
}

