export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background text-text-secondary py-8 px-6 border-t border-border">
      <div className="container flex flex-col items-center justify-center text-center gap-2">
        <p className="text-sm font-medium text-text-primary">
          &copy; {currentYear} Matheus Ferraz. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
