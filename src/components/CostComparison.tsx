import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

export function CostComparison() {
  return (
    <section className="border-b border-zinc-800/50 bg-zinc-950 py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            The Financial Impact
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Stop losing motivated buyers because of scheduling conflicts.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {/* Traditional Assistant */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Traditional Assistant</h3>
            <div className="text-3xl font-bold text-zinc-400 mb-6">$3,500<span className="text-lg text-zinc-500 font-normal">/mo avg.</span></div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <X size={20} className="text-red-400 shrink-0 mt-0.5" />
                <span>Works 9-5, Monday to Friday</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <X size={20} className="text-red-400 shrink-0 mt-0.5" />
                <span>Misses calls when on another line</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <X size={20} className="text-red-400 shrink-0 mt-0.5" />
                <span>Requires onboarding and training</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <X size={20} className="text-red-400 shrink-0 mt-0.5" />
                <span>Takes holidays and sick days</span>
              </li>
            </ul>
          </motion.div>

          {/* AI Receptionist */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
              MY OFFER
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">Custom AI Setup</h3>
            <div className="text-3xl font-bold text-amber-500 mb-6">$0<span className="text-lg text-amber-500/70 font-normal"> Installation</span></div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-300">
                <Check size={20} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Available 24/7/365</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <Check size={20} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Handles infinite simultaneous calls</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <Check size={20} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Perfectly consistent brand voice</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <Check size={20} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Never calls in sick or takes holidays</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
