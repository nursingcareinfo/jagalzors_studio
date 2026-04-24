import Navigation from './components/Navigation';
import ProductGrid from './components/ProductGrid';
import Scrollytelling from './components/Scrollytelling';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main>
        <ProductGrid />
        <Scrollytelling />
      </main>
      <Footer />
    </div>
  );
}

