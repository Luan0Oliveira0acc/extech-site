'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const included = [
  'Site institucional otimizado para conversão de leads',
  'Gestão de redes sociais (Instagram, Facebook, LinkedIn)',
  'Posts e stories educativos sobre seu segmento',
  'Campanhas de Google Ads para busca local',
  'Anúncios no Facebook/Instagram para captação',
  'SEO local para aparecer no Google Maps',
  'Formulários de agendamento integrados',
  'Depoimentos e cases de sucesso destacados',
  'Sistema de avaliações (Google Reviews)',
  'Chat online e integração com WhatsApp Business',
]

export default function WhatIncluded() {
  return (
    <section id="servicos" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative min-h-screen flex items-center what-included-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)] opacity-30"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(251,191,36,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            O que sua empresa de serviços recebe
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Ecossistema completo para captar, converter e escalar clientes B2C e B2B
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Incluído */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-accent-gold mb-2">✓ Incluído no Pacote</h3>
              <p className="text-gray-400 text-sm md:text-base">Solução completa para empresas de serviços</p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              {included.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 card hover-lift transition-all duration-300 responsive-card"
                >
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-accent-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12 p-6 md:p-8 glass-dark rounded-2xl border border-gray-700/50 hover-lift"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Pronto para escalar sua presença digital?
          </h3>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Primeira consultoria gratuita + plano personalizado para seu negócio
          </p>
          <button
            onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary animate-pulse-slow text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
          >
            QUERO CRESCER NO DIGITAL
          </button>
        </motion.div>
      </div>
    </section>
  )
}



