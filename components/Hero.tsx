'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* EX.TECH Apresenta - Fixo no topo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-20 left-0 right-0 z-20 text-center"
      >
        <p className="text-accent-gold font-semibold text-lg md:text-xl tracking-wider uppercase">
          EX.TECH Apresenta
        </p>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">BLACK FRIDAY</span>
            <br />
            <span className="gradient-text">Sua Presença Digital Completa</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
        >
          Marketing Digital Estratégico para Empresas de Serviços. Gere leads qualificados enquanto sua equipe foca em atender com excelência.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToForm}
            className="btn-primary text-lg px-8 py-4"
          >
            QUERO TRANSFORMAR MEU NEGÓCIO
          </button>
          <a 
            href="https://wa.me/5511973822215" 
            target="_blank"
            className="btn-secondary text-green-400 border-green-400/50 hover:border-green-400"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}



