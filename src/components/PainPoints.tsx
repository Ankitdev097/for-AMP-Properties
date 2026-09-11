import { motion } from 'motion/react';
import { Voicemail, Clock, Users, XCircle } from 'lucide-react';

export function PainPoints() {
  const points = [
    {
      icon: <Voicemail size={24} />,
      title: "The Voicemail Drop-Off",
      description: "Letting new leads go to voicemail while you're negotiating a deal or walking a client through 8824 161st Street Ct E."
    },
    {
      icon: <Clock size={24} />,
      title: "After-Hours Inquiries",
      description: "Missing crucial calls on weekends or late evenings when highly motivated buyers are browsing Zillow or Facebook."
    },
    {
      icon: <Users size={24} />,
      title: "Losing to the Next Agent",
      description: "In Washington's competitive market, a missed call often means losing a listing to the next Realtor who answers."
    }
  ];

  return (
    <section className="border-b border-zinc-800/50 bg-zinc-950 py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            The Reality of Washington Real Estate
          </h2>
          <p className="text-zinc-400 max-w-2xl md:mx-auto text-lg">
            As a top-performing Filipino Realtor, you can't be in two places at once. But every missed call is a missed opportunity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-8 transition-colors hover:border-zinc-700"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                {point.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{point.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
