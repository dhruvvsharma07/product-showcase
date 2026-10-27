import PriceTag from "./PriceTag";

type Props = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({
  title,
  price,
  inStock,
}: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <PriceTag amount={price} />
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}