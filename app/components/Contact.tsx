"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-slate-950 py-16 px-4 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        
        {/* Bal oszlop: Kapcsolati infók */}
        <div className="flex-1 lg:pr-8 w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 lg:mb-6 tracking-tight">
            Kérj <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Árajánlatot</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-8 lg:mb-12">
            Küldd el a 3D modelledet, és 24 órán belül pontos árajánlatot adunk. Oszd meg velünk az elképzeléseidet, és mi mérnöki pontossággal megvalósítjuk.
          </p>
          
          <div className="space-y-6 lg:space-y-8">
            <div className="flex items-center gap-6">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <Mail className="w-7 h-7 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Email</p>
                <p className="text-white text-lg font-semibold">info@3dprint-precizio.hu</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <Phone className="w-7 h-7 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Telefon</p>
                <p className="text-white text-lg font-semibold">+36 30 123 4567</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <MapPin className="w-7 h-7 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Műhely címe</p>
                <p className="text-white text-lg font-semibold">1111 Budapest, Precíziós u. 42.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Jobb oszlop: Glassmorphism Űrlap */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="flex-1 w-full max-w-lg lg:max-w-xl mx-auto lg:mx-0"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Név</label>
                <input type="text" id="name" placeholder="Vezeték és Keresztnév" className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email cím</label>
                <input type="email" id="email" placeholder="pelda@email.com" className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-2">Projekt rövid leírása</label>
                <textarea id="description" rows={5} placeholder="Oszd meg a projekt részleteit (anyagigény, méretek, darabszám)..." className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"></textarea>
              </div>
              <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors duration-200 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                Árajánlatkérés elküldése
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}