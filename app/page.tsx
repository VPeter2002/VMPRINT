"use client";

import Services from "./components/Services";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-slate-950 font-sans">
      
      {/* Fejléc / Navigáció */}
      <Navbar />

      {/* Hero Szekció */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Háttér rácsminta és elmosott fénykörök (Radial gradient glow) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Bal oszlop: Tartalom */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 lg:mb-6">
              Precíziós <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">3D Nyomtatás</span> <br className="hidden lg:block" />
              Mérnöki Minőségben
            </h1>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-slate-400 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0">
              Keltse életre ötleteit ipari szintű pontossággal. Prototípusgyártás, egyedi alkatrészek és funkcionális modellek gyorsan, kompromisszumok nélkül.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-4">
              <a href="#contact" className="w-full sm:w-auto text-center px-6 py-3 lg:px-8 lg:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-200 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                Azonnali Árajánlat
              </a>
              <a href="#services" className="w-full sm:w-auto text-center px-6 py-3 lg:px-8 lg:py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-semibold rounded-lg transition-all duration-200">
                Géppark és Szolgáltatások
              </a>
            </div>
          </motion.div>

          {/* Jobb oszlop: Glassmorphism Kártya */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.15 }}
            className="flex-1 w-full max-w-lg relative mt-8 lg:mt-0"
          >
            
            {/* Lebegő Badge-ek */}
            <div className="absolute -top-6 -left-4 md:-left-8 z-20 bg-slate-900/80 backdrop-blur-md border border-white/10 text-cyan-400 text-sm md:text-base font-semibold px-5 py-2 rounded-full shadow-xl">
              ✨ 0.05mm pontosság
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 z-20 bg-slate-900/80 backdrop-blur-md border border-white/10 text-orange-400 text-sm md:text-base font-semibold px-5 py-2 rounded-full shadow-xl">
              ⚙️ PLA, PETG, ABS
            </div>

            {/* Fő Képtartó Kártya */}
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-50"></div>
              <div className="relative aspect-[4/3] w-full bg-slate-900/50 rounded-xl flex items-center justify-center border border-white/5 overflow-hidden">
                
                <video 
                  src="/vmprint.mp4"
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover rounded-xl"
                />
                
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Szolgáltatások Szekció */}
      <div id="services">
        <Services />
      </div>

      {/* Termékek / Referenciák Szekció */}
      <div id="products">
        <Products />
      </div>

      {/* Kapcsolat Szekció */}
      <div id="contact">
        <Contact />
      </div>

      {/* Lábléc */}
      <Footer />

    </main>
  );
}
