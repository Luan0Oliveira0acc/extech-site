'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Shield, FileText, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Marketing Digital para Empresas de Serviços
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Especializados em gerar leads B2B e B2C para empresas de serviços. 
              Você entrega com excelência, nós trazemos os clientes.
            </p>
            <div className="flex items-center gap-4 text-gray-400 flex-wrap">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent-gold" />
                <span className="text-sm">Especialistas em Serviços B2B e B2C</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-accent-gold" />
                <span className="text-sm">Sem Fidelidade | Resultados Reais</span>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-accent-gold" />
                <span className="text-sm">(11) 97382-2215</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-accent-gold" />
                <span className="text-sm">contato@exemplo.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-accent-gold" />
                <span className="text-sm">São Paulo, SP</span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Links</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-accent-gold transition-colors text-sm"
              >
                <ExternalLink className="w-3 h-3" />
                Política de Privacidade
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-accent-gold transition-colors text-sm"
              >
                <ExternalLink className="w-3 h-3" />
                Termos de Uso
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-accent-gold transition-colors text-sm"
              >
                <ExternalLink className="w-3 h-3" />
                FAQ
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Agência Digital Completa. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Transformando empresas através do marketing digital inteligente
          </p>
        </motion.div>
      </div>
    </footer>
  )
}




