"use client"

import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import WhatIncluded from '@/components/WhatIncluded'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

const SplineBackground = dynamic(
  () => import("@/components/ui/spline-background").then(mod => ({ default: mod.SplineBackground })),
  { ssr: false, loading: () => <div className="fixed inset-0 bg-black" style={{ zIndex: 0 }} /> }
)

export default function Home() {
  return (
    <>
      {/* Spline 3D Background - Fixed background */}
      <SplineBackground />
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <Benefits />
        <WhatIncluded />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}
