// src/components/ProductGrid.jsx
export default function ProductGrid({ products }) {
    return (
        <section className="py-16 px-6 md:px-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10">Explora nuestros productos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-700 mb-4">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold text-indigo-600">${product.price}</span>
                                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
