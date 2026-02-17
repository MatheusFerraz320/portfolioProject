
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-gray-400 py-8 px-6 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-2">
        <p className="text-sm font-medium text-gray-300">
          &copy; {currentYear} Matheus Ferraz.
        </p>
      </div>
    </footer>
  );
}