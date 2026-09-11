import { useState } from 'react';
import { Mail, Copy, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export function EmailModal({ isOpen, onClose, email }: EmailModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-zinc-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
              <Mail size={24} />
            </div>
            
            <h3 className="mb-2 text-2xl font-semibold tracking-tight text-white">Let's set this up.</h3>
            <p className="mb-6 text-zinc-400">
              Reply to my previous message or use the email below to schedule your free 9-minute setup call. No pitch, just implementation.
            </p>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={handleCopy}
                className="flex w-full items-center justify-between rounded-xl bg-zinc-800/50 px-4 py-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-700"
              >
                <span className="truncate">{email}</span>
                {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} className="text-zinc-400" />}
              </button>
              
              <a
                href={`mailto:${email}`}
                className="flex w-full items-center justify-center rounded-xl bg-amber-500 px-4 py-3 text-sm font-medium text-black transition-all hover:bg-amber-400 active:scale-[0.98]"
              >
                Open Email App
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
