
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Hero from '@/components/Hero';
import Category from '@/components/Category';
import Spritual from '@/components/Spritual';
import Phones from '@/components/Phones';

export default function Home() {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="">
      <div>
        <Hero />
      </div>

      <div className='max-w-7xl mx-auto px-3 sm:px-0'>
      <Category />
        <div>
          <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
      </div>

      <div className='mt-8'>
        <Spritual />
        <Phones />
      </div>
    </div>
  );
}
