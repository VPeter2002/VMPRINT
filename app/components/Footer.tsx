export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p>&copy; {currentYear} PrusaPrint. Minden jog fenntartva.</p>
      </div>
    </footer>
  );
}