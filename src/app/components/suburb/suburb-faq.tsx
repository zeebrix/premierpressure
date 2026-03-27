import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface SuburbFAQProps {
  suburbName: string;
}

export function SuburbFAQ({ suburbName }: SuburbFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: `How much does pressure cleaning cost in ${suburbName}?`,
      answer: `Pressure cleaning costs in ${suburbName} typically range from $200-$600 for residential properties, depending on the service type and size. Driveway cleaning starts from $150, house washing from $300, and roof cleaning from $400. We provide free, no-obligation quotes after assessing your specific property needs. All quotes include equipment, cleaning products, and our satisfaction guarantee.`,
    },
    {
      question: `Do you service all of ${suburbName}?`,
      answer: `Yes! We proudly service all areas of ${suburbName} and surrounding suburbs. We're local to Perth's northern/southern corridors and can typically schedule services within 3-7 days. Emergency or urgent cleaning can often be arranged within 24-48 hours depending on availability.`,
    },
    {
      question: 'How long does pressure cleaning take?',
      answer: `Most residential pressure cleaning jobs in ${suburbName} take 2-5 hours depending on the service. A standard driveway cleaning takes 1-2 hours, full house washing 3-4 hours, and roof cleaning 2-3 hours. We'll provide an accurate timeframe in your quote. You can use the cleaned areas immediately after they dry, usually within 30-60 minutes.`,
    },
    {
      question: 'Do I need to be home during the cleaning?',
      answer: `Not necessarily. As long as we have access to water and the areas to be cleaned, we can complete the work while you're away. Many ${suburbName} homeowners provide gate codes or leave areas accessible and we handle everything professionally. We'll send you before and after photos and call when complete.`,
    },
    {
      question: 'Is pressure cleaning safe for my property?',
      answer: `Absolutely. Professional pressure cleaning is safe when done correctly. We adjust pressure levels based on the surface type - lower pressure for delicate surfaces like painted weatherboards and render, higher pressure for concrete and pavers. Our experienced team knows exactly what each surface can handle. We also use eco-friendly, biodegradable cleaning products safe for your gardens, pets, and family.`,
    },
    {
      question: 'What payment methods do you accept?',
      answer: `We accept cash, bank transfer, and card payments. Payment is due upon completion of the work. We'll never ask for full payment upfront. For larger commercial jobs, we can arrange payment terms. All quotes are fixed - no hidden fees or surprise charges.`,
    },
    {
      question: 'Do you offer a guarantee?',
      answer: `Yes! We offer a 100% satisfaction guarantee. If you're not completely happy with the results, we'll return to re-clean the area at no extra cost. We take pride in our work and our reputation in ${suburbName} - your satisfaction is our priority.`,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            Frequently Asked Questions - {suburbName}
          </h2>
          <p className="text-lg text-gray-600">
            Got questions about pressure cleaning in {suburbName}? We've got answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#0a1628] pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#00d4ff] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5"
                >
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="tel:+61452579657"
            className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#00c4ef] transition-all shadow-lg hover:shadow-xl"
          >
            Call Us Now - 0452 579 657
          </a>
        </div>
      </div>
    </section>
  );
}