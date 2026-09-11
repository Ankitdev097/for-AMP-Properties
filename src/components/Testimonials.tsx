import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "I used to lose 3-4 leads a month just because I was doing a walkthrough or driving. Now, my AI assistant answers the phone, qualifies them, and my calendar just fills up automatically.",
      name: "David M.",
      role: "Real Estate Broker"
    },
    {
      quote: "The qualification is so natural, clients genuinely think they are talking to my personal assistant. It has completely changed how I run my listings.",
      name: "Sarah T.",
      role: "Realtor"
    }
  ];

  return (
    <section className="border-b border-zinc-800/50 bg-zinc-950 py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">
          What Other Agents Are Saying
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8"
            >
              <Quote size={40} className="absolute top-6 right-6 text-zinc-800 opacity-50" />
              <p className="text-zinc-300 text-lg leading-relaxed mb-8 relative z-10">"{t.quote}"</p>
              <div>
                <h4 className="text-white font-medium">{t.name}</h4>
                <p className="text-amber-500/80 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
