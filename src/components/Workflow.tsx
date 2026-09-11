import { motion } from 'motion/react';
import { Folder, FileJson, Settings2, Download, Workflow as WorkflowIcon } from 'lucide-react';

export function WorkflowSection() {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 items-center rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-12">
          
          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              I've Already Built Your Workflow
            </h2>
            <p className="text-zinc-400 mb-8 text-lg">
              I took the liberty of creating the exact architecture AMP Properties needs to capture leads from Zillow, Facebook, and direct calls. It's ready to install.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-zinc-300">
                <Settings2 size={20} className="text-amber-500" />
                <span>Pre-configured Retell AI Setup</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <WorkflowIcon size={20} className="text-amber-500" />
                <span>2 Custom n8n Workflows (Scheduling & Summary)</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <FileJson size={20} className="text-amber-500" />
                <span>Complete Installation Guide & Setup Diagram</span>
              </div>
            </div>
            
            <a 
              href="https://drive.google.com/drive/folders/1eTBaFmT5UWUJq4Pgnt6yhEtCowOPek-8?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-amber-400 hover:scale-105 active:scale-95"
            >
              <Download size={18} />
              Download Your Custom Workflow
            </a>
          </div>
          
          <div className="flex-1 w-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
                <Folder size={24} className="text-blue-400" />
                <h3 className="text-white font-medium">AMP Properties - AI Setup</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 border border-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <FileJson size={18} className="text-yellow-400" />
                    <span className="text-sm text-zinc-300">n8n_appointment_scheduler.json</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 border border-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <FileJson size={18} className="text-yellow-400" />
                    <span className="text-sm text-zinc-300">n8n_call_summary_logger.json</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 border border-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <Settings2 size={18} className="text-purple-400" />
                    <span className="text-sm text-zinc-300">Retell_AI_Voice_Config.txt</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 border border-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <FileJson size={18} className="text-green-400" />
                    <span className="text-sm text-zinc-300">Installation_Checklist.pdf</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
