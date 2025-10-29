'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Create WhatsApp message
      const message = `Olá! Gostaria de terceirizar minha presença digital completa.

Nome: ${formData.name}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}
${formData.message ? `Sobre meu negócio: ${formData.message}` : ''}

Vim através da oferta Black Friday!`

      // Open WhatsApp
      const whatsappUrl = `https://wa.me/5511973822215?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      
      setSubmitStatus('success')
      setFormData({ name: '', whatsapp: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="formulario" data-section="contato" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(218,165,32,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transforme sua presença digital agora
          </h2>
          <p className="text-gray-400 text-lg">
            Preencha o formulário e receba uma consultoria gratuita personalizada
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-dark p-8 rounded-2xl border border-gray-700/50"
        >
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center mb-8 p-6 bg-green-900 bg-opacity-30 border border-green-500"
            >
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-300 mb-2">Formulário enviado!</h3>
              <p className="text-green-200">
                Redirecionando para o WhatsApp para finalizar sua compra...
              </p>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center mb-8 p-6 bg-red-900 bg-opacity-30 border border-red-500"
            >
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-red-300 mb-2">Erro ao enviar</h3>
              <p className="text-red-200">
                Tente novamente ou entre em contato diretamente pelo WhatsApp.
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Nome completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-white font-semibold mb-2">
                WhatsApp *
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                E-mail (opcional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Observações (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="form-textarea"
                placeholder="Conte-nos sobre seu negócio ou alguma preferência específica..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  QUERO CONSULTORIA GRATUITA
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>✓ Consultoria gratuita e diagnóstico completo</p>
            <p>✓ Plano personalizado para seu negócio</p>
            <p>✓ Sem compromisso, sem pegadinhas</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}




