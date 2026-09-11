import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do people trust enough to talk to AI?",
    answer: "Yes. Modern voice AI has advanced to the point where conversational latency is under 500ms, and the voice models sound entirely human. Most clients assume they are speaking to a high-end receptionist or answering service. They appreciate the immediate response rather than hitting a voicemail."
  },
  {
    question: "What if the caller asks a complex question?",
    answer: "The AI is programmed with guardrails. If a caller asks something highly specific or complex that it cannot confidently answer, it gracefully transitions by saying, 'That's a great question. Let me take down your information and have Anthony call you back directly as soon as he's out of his meeting.' It then immediately texts you the summary."
  },
  {
    question: "Why are you offering to set this up for free?",
    answer: "I build these workflows to demonstrate undeniable value upfront. My goal is to help you install it and see the results immediately. If you love it, we can discuss a long-term maintenance or scaling relationship later, but there is zero obligation."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">
          Common Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-white">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-zinc-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-zinc-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
