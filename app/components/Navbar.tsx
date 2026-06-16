export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        
        <a href="#" className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
          VMPRINT
        </a>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-300 hover:text-white transition-colors font-medium">Szolgáltatások</a>
            <a href="#services" className="text-slate-300 hover:text-white transition-colors font-medium">Géppark</a>
          </div>
          <a href="#contact" className="px-4 py-2 text-sm md:text-base md:px-5 md:py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-200 shadow-[0_0_10px_rgba(249,115,22,0.3)]">
            Árajánlat
          </a>
        </div>
        
      </div>
    </nav>
  );
}