const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-50 px-2 py-3">
      <div className="mx-auto max-w-2xl flex flex-col items-center text-center space-y-2">
        <img
          src="/src/assets/img/nubdexchange_logo.png"
          alt="NU Logo"
          className="h-8 w-auto"
        />
        <h2 className="text-sm font-bold">BulldogEx Shop</h2>
        <p className="text-[10px] text-zinc-400">Campus essentials, simple ordering.</p>
        <nav className="flex gap-2 text-[9px] font-semibold uppercase tracking-widest">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/products" className="hover:text-white transition">Products</a>
        </nav>
        <div className="w-full border-t border-zinc-700"></div>
        <p className="text-[8px] text-zinc-500">
          © {new Date().getFullYear()} BulldogEx Shop — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;