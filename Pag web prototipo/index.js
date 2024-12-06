import React from 'react';
import ReactDOM from 'react-dom/client';
import { Search, User, ShoppingBag } from 'lucide-react';

// Componente Header
function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-xl">K</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>INICIO</li>
              <li className="underline">PRODUCTOS</li>
              <li>PARA TI</li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5" />
          <User className="w-5 h-5" />
          <ShoppingBag className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
}

// Componente ProductCard
function ProductCard({ product }) {
  return (
    <div className="bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mb-4"
      />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.price}</p>
      {product.soldOut && (
        <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 mt-2">
          Agotado
        </span>
      )}
    </div>
  );
}

// Componente ProductList
function ProductList() {
  const products = [
    { name: 'All Day / All Night - Eyeshadow Palette', price: '$ 769.00 MXN', image: '/placeholder.svg' },
    { name: 'K OS - Matte Lipstick', price: '$ 469.00 MXN', image: '/placeholder.svg' },
    { name: 'Kenia Os - Matte Lipstick', price: '$ 469.00 MXN', image: '/placeholder.svg', soldOut: true },
    { name: 'Matte Lipstick Set - K OS, NINI, KENIA OS', price: '$ 999.00 MXN', image: '/placeholder.svg', soldOut: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

// Componente App principal
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Productos</h1>
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <select className="border p-2">
              <option>Availability</option>
            </select>
            <select className="border p-2">
              <option>Price</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span>Ordenar por:</span>
            <select className="border p-2">
              <option>Alfabéticamente, A-Z</option>
            </select>
          </div>
        </div>
        <ProductList />
      </main>
    </div>
  );
}

// Renderizar la aplicación en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
