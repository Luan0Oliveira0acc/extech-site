import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EX.TECH — Marketing Digital para Empresas de Serviços | BLACK FRIDAY',
  description: 'Especialistas em gerar leads B2B e B2C para empresas de serviços. Site, redes sociais, tráfego pago e SEO. Você entrega, nós trazemos os clientes.',
  keywords: 'marketing digital, empresas de serviços, geração de leads, tráfego pago, google ads, redes sociais, SEO local, B2B, B2C',
  authors: [{ name: 'EX.TECH' }],
  openGraph: {
    title: 'EX.TECH — Marketing Digital para Empresas de Serviços',
    description: 'Geração de leads qualificados para empresas de serviços. Presença digital completa.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EX.TECH — Marketing Digital para Empresas de Serviços',
    description: 'Geração de leads qualificados para empresas de serviços.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}










