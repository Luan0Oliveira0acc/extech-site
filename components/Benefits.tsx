'use client'

import { motion } from 'framer-motion'
import { Palette, Zap, Clock } from 'lucide-react'

const benefits = [
  {
    icon: Palette,
    title: 'Autoridade no Mercado',
    description: 'Posicionamos sua empresa como referência no segmento com presença digital profissional.',
  },
  {
    icon: Zap,
    title: 'Geração Previsível de Leads',
    description: 'Sistema de captação contínua de clientes potenciais via site, Google e redes sociais.',
  },
  {
    icon: Clock,
    title: 'Marketing Terceirizado',
    description: 'Equipe completa cuidando do digital da sua empresa. Você foca nas operações e vendas.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por que empresas de serviços nos escolhem?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluções digitais para empresas que querem escalar sem depender só de indicação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group text-center p-8 card hover-lift"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 border border-accent-gold rounded-full group-hover:bg-accent-gold transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-accent-gold group-hover:text-black transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}




