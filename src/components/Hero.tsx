import { motion } from 'motion/react';
import { Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800/50 bg-black pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[120px]">
        <div className="h-[400px] w-[800px] rounded-full bg-amber-500/30" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-sm font-medium text-amber-500 tracking-wide uppercase">Custom Built for AMP Properties</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Never Miss Another Motivated Client While You're at a Showing.
          </h1>
          
          <p className="text-lg lg:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            We analyzed your recent campaign for the $600k Puyallup listing. Here's a personalized AI inbound workflow designed exclusively for Anthony Markiie Prado to capture every lead, 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onOpenModal}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-amber-400 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(245,158,11,0.4)]"
            >
              Schedule Free Setup
              <ArrowRight size={18} />
            </button>
            <a 
              href="https://drive.google.com/drive/folders/1eTBaFmT5UWUJq4Pgnt6yhEtCowOPek-8?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-zinc-800"
            >
              Download Custom Workflow
            </a>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-amber-500" />
              <span>Answers instantly, 24/7</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-zinc-800" />
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-amber-500" />
              <span>Books straight to calendar</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-zinc-800" />
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-amber-500" />
              <span>Indistinguishable from human</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
