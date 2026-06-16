export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <a href="#" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
          PrusaPrint
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-slate-300 hover:text-white transition-colors font-medium">Szolgáltatások</a>
          <a href="#services" className="text-slate-300 hover:text-white transition-colors font-medium">Géppark</a>
          <a href="#contact" className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-200 shadow-[0_0_10px_rgba(249,115,22,0.3)]">
            Árajánlat
          </a>
        </div>
        
      </div>
    </nav>
  );
}