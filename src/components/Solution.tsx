import { motion } from 'motion/react';
import { Bot, CheckCircle2, CalendarCheck, Speech } from 'lucide-react';

export function Solution() {
  const benefits = [
    {
      icon: <Bot size={24} />,
      title: "Answers Instantly, 24/7",
      description: "Whether it's 2 PM during a showing or 11 PM on a Sunday, your custom AI receptionist answers on the first ring, every single time."
    },
    {
      icon: <Speech size={24} />,
      title: "Indistinguishable from a Human",
      description: "Qualifies buyers and sellers naturally with conversational nuance. It knows your AMP Properties portfolio and speaks your brand language."
    },
    {
      icon: <CalendarCheck size={24} />,
      title: "Books Straight to Your Calendar",
      description: "Seamlessly integrates with your existing scheduling tools to book property tours and listing consultations without lifting a finger."
    }
  ];

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-10 blur-[100px]">
        <div className="h-[500px] w-[500px] rounded-full bg-amber-500/40" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Your 24/7 AI Receptionist
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              We've mapped out exactly how an AI assistant can integrate into the AMP Properties ecosystem. It's not just an answering machine—it's a highly trained team member that never sleeps.
            </p>
            
            <div className="flex flex-col gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1 h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-zinc-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center">
                    <Bot size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">AMP Properties Assistant</h4>
                    <span className="text-xs text-emerald-400 flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 block"></span>
                      Online & Listening
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="flex gap-3">
                  <span className="text-zinc-500 shrink-0">[10:02 AM]</span>
                  <span className="text-zinc-300">"Hi, you've reached Anthony's office at AMP Properties. How can I help you today?"</span>
                </div>
                <div className="flex gap-3 pl-4 border-l-2 border-zinc-800">
                  <span className="text-zinc-500 shrink-0">[10:02 AM]</span>
                  <span className="text-zinc-400 italic">"I saw your listing in Puyallup for $600k. Is it still available?"</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-zinc-500 shrink-0">[10:03 AM]</span>
                  <span className="text-amber-400">"Yes, 8824 161st Street Ct E is still available! It's a gorgeous 4-bedroom turnkey home. Would you like me to schedule a private tour for you with Anthony?"</span>
                </div>
                <div className="flex gap-3 pl-4 border-l-2 border-zinc-800">
                  <span className="text-zinc-500 shrink-0">[10:03 AM]</span>
                  <span className="text-zinc-400 italic">"That would be great. Tomorrow afternoon?"</span>
                </div>
                <div className="flex gap-3 mt-4 pt-4 border-t border-zinc-800/50">
                  <span className="text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 size={16} /> Appointment booked directly to your calendar.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
