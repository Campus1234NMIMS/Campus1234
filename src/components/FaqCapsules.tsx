import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqCapsules() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'How does the "1st view your work then only pay" policy really work?',
      answer: 'It is simple: you submit your school or college project topic and notes without paying any advance deposit. Our team builds your responsive presentation website and hosts a private live preview link. You open it, test it, show it to your group members or teacher. Only when you love it and want to use it for your presentation do you pay the package fee (₹500, ₹600, or ₹700).',
    },
    {
      question: 'What is the exact difference between the ₹500 and ₹600 packages?',
      answer: 'The ₹500 package is hosted on a permanent, fast Google AI Studio or GitHub Pages link (e.g. yourproject.github.io or ais-dev.run.app) without extra domain registration. The ₹600 package includes your own dedicated, personalized .online custom domain (e.g. solargrid.online), SSL certificate, and an ultra-clean presentation address plus high-res printable QR code.',
    },
    {
      question: 'What is the upcoming ₹700 AI Chatbot website?',
      answer: 'This is our upcoming flagship package! It includes the dedicated .online URL plus an interactive AI assistant trained specifically on your project report. During your viva or exhibition, judges and teachers can ask technical questions through the chatbot, and it answers accurately with citations from your work.',
    },
    {
      question: 'What if my school presentation or exhibition is in 24 hours?',
      answer: 'We prioritize urgent school deadlines! Mention "Urgent 24 Hours" in the request form or email campuscraft01@gmail.com with your slides right away. Most basic and pro presentation sites can be drafted within 12 to 24 hours.',
    },
    {
      question: 'Can evaluators and teachers scan a QR code from my chart paper?',
      answer: 'Yes! For both the ₹600 and ₹700 packages (and optional for ₹500), we provide a print-ready vector QR code. You can paste it onto your science exhibition chart paper or slide deck. Teachers simply scan it with their phone camera to open your live project.',
    },
    {
      question: 'Can you add our school logo, project abstract, and team member names?',
      answer: 'Absolutely. Every site is fully tailored to your school, team member credits, teacher/mentor guide acknowledgements, diagrams, tables, and project bibliography.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-bold tracking-wider text-cyan-300 uppercase block mb-3 font-mono">
          Student Help Desk
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 text-balance">
          Frequently Asked{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Everything you need to know about our student-first presentation websites.
        </p>
      </div>

      <div className="space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="glass-capsule rounded-3xl border border-white/15 overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.04] transition-colors"
              >
                <span className="text-sm sm:text-base font-semibold text-white">
                  {faq.question}
                </span>
                <span className="p-1 rounded-full bg-white/10 text-cyan-300 shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-3 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
