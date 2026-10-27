import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>My Product Store</h1>

      <Greeting name="Dhruv" />

      <ProductCard
        title="Wireless Headphones"
        price={2499}
        inStock={true}
      />

      <ProductCard
        title="Gaming Mouse"
        price={1299}
        inStock={false}
      />
    </main>
  );
}