import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BLACK FRIDAY — Seu site profissional a partir de R$399',
  description: 'Design minimalista, performance máxima e confiança que converte. Oferta especial Black Friday - Sites profissionais por apenas R$400.',
  keywords: 'site profissional, black friday, web design, desenvolvimento web, site barato, landing page',
  authors: [{ name: 'Desenvolvimento Profissional' }],
  openGraph: {
    title: 'BLACK FRIDAY — Seu site profissional por apenas R$400',
    description: 'Design minimalista, performance máxima e confiança que converte.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLACK FRIDAY — Seu site profissional por apenas R$400',
    description: 'Design minimalista, performance máxima e confiança que converte.',
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










