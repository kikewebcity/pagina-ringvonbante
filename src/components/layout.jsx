export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-white shadow p-4 text-center text-2xl font-bold">
        Joyería Abstracta
      </header>

      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Portafolio</h2>
          <p>Explora piezas únicas y contemporáneas.</p>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Tienda</h2>
          <p>Compra directamente desde el sitio.</p>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Blog</h2>
          <p>Historias detrás de cada diseño.</p>
        </section>
      </main>

      <footer className="bg-white text-center p-4 text-sm text-gray-500">
        © 2025 Joyería Abstracta
      </footer>
    </div>
  );
}
