"use client";

import { Cpu, Wrench, Printer } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Mérnöki Prototípusgyártás",
      description: "Ipari pontosság és gyors iteráció a termékfejlesztés minden szakaszában.",
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Egyedi Alkatrész & Makett",
      description: "Pótalkatrészek tervezése és nyomtatása, valamint részletgazdag hobbi projektek és makettek kivitelezése.",
      icon: <Wrench className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Modern Géppark",
      description: "Prusa Mini flotta 0.05mm-es felbontással. Támogatott anyagok: PLA, PETG, ABS, TPU.",
      icon: <Printer className="w-8 h-8 text-orange-500" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="relative bg-slate-900 py-24 px-6 lg:px-8 border-t border-white/5 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Szolgáltatások és <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Géppark</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Korszerű eszköztárunk és szakértelmünk garantálja a tökéletes végeredményt minden projekt esetében.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] group"
            >
              <div className="bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
