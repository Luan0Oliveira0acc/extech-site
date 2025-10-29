'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Por que empresas de serviços precisam investir em digital?',
    answer: 'Empresas de serviços que não aparecem online estão invisíveis para 85% do mercado. Seus concorrentes estão captando clientes via Google, Instagram e anúncios enquanto você depende de indicações. Presença digital não é mais opcional, é sobrevivência.'
  },
  {
    question: 'Quanto tempo até ver resultados e novos contratos?',
    answer: 'Site institucional em 7 dias. Google Ads pode gerar leads na primeira semana. Redes sociais começam em 3 dias. SEO traz fluxo orgânico em 2-3 meses. Esperamos que você veja aumento de orçamentos e propostas já no primeiro mês de campanha.'
  },
  {
    question: 'Quais segmentos de serviços vocês atendem?',
    answer: 'Empresas de manutenção, limpeza, segurança, TI, contabilidade, jurídico, arquitetura, engenharia, consultoria, facilities, RH, marketing, desenvolvimento, design, tradução, eventos, e qualquer B2B ou B2C de serviços recorrentes ou sob demanda.'
  },
  {
    question: 'Como funciona a criação de conteúdo para B2B?',
    answer: 'Criamos conteúdo institucional, cases de sucesso, processos, diferenciais, depoimentos de clientes corporativos, vídeos explicativos e posts educativos no LinkedIn. Posicionamos sua empresa como autoridade técnica no segmento.'
  },
  {
    question: 'Qual o investimento em tráfego pago além da gestão?',
    answer: 'Recomendamos R$1.000-3.000/mês em anúncios conforme ticket médio e concorrência. Empresas B2B com contratos de R$5k+ devem investir mais. Otimizamos campanhas para reduzir custo por lead qualificado e aumentar ROI.'
  },
  {
    question: 'Vocês atendem apenas empresas ou profissionais também?',
    answer: 'Ambos! Atendemos desde profissionais autônomos até empresas com equipes de 50+ pessoas. Nossa metodologia se adapta: solo, pequena empresa, média ou grande operação de serviços.'
  },
  {
    question: 'Há garantia de geração de leads ou contratos?',
    answer: 'Garantimos execução: site, posts, anúncios ativos, SEO em andamento. Geração de leads depende de investimento, mercado e região. Trabalhamos sem fidelidade - se não funcionar, cancela. 95% renovam porque veem resultado.'
  },
  {
    question: 'Por que não contratar CLT ao invés de terceirizar?',
    answer: 'Um bom profissional de marketing custa R$5-8k + encargos. Agência entrega equipe completa (designer, copy, gestor de tráfego, SEO) por menos. Mais resultado, menos risco, zero CLT.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-accent-gold" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Perguntas Frequentes
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dúvidas comuns de empresas de serviços sobre marketing digital
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover-lift overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 group"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-accent-gold transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-accent-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed border-t border-gray-700/50 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 glass-dark rounded-2xl border border-gray-700/50"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-400 mb-6">
            Fale com nossa equipe e tire todas as suas dúvidas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511973822215"
              target="_blank"
              className="btn-primary"
            >
              Falar no WhatsApp
            </a>
            <button
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Agendar Consultoria Gratuita
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

