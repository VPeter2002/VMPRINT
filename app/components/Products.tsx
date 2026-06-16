"use client";

import { Plane, Settings, Building2, Box, Cpu, Hammer } from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      title: "Egyedi drón váz",
      material: "PETG",
      icon: <Plane className="w-12 h-12 text-orange-500 opacity-80 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "Ipari fogaskerék prototípus",
      material: "PC Blend",
      icon: <Settings className="w-12 h-12 text-orange-500 opacity-80 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "Építészeti makett",
      material: "PLA",
      icon: <Building2 className="w-12 h-12 text-orange-500 opacity-80 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "Szenzor burkolat",
      material: "ABS",
      icon: <Cpu className="w-12 h-12 text-orange-500 opacity-80 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "Szervező doboz rendszerező",
      material: "PLA",
      icon: <Box className="w-12 h-12 text-orange-500 opacity-80 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "Egyedi szerszám markolat",
      material: "TPU",
      icon: <Hammer className="w-12 h-12 text-orange-500 opacity-80 group-hover:scale-110 transition-transform duration-300" />,
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
    <section className="relative py-16 px-4 lg:py-24 lg:px-8 border-t border-white/5 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Kiemelt <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Munkáink</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Tekintsd meg legutóbbi referenciáinkat, melyeket mérnöki pontossággal és a megfelelő alapanyagok kiválasztásával készítettünk.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden rounded-2xl group transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
            >
              <div className="aspect-video bg-slate-800 flex items-center justify-center relative overflow-hidden">
                {product.icon}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <div className="p-6 bg-slate-950/50">
                <h3 className="text-xl font-bold text-white mb-1">{product.title}</h3>
                <p className="text-orange-400 font-medium text-sm tracking-wide uppercase">{product.material}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}