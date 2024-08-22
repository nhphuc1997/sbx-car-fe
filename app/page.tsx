import Auctions from "@/components/contents/Auctions";
import ProductCarousel from "@/components/contents/ProductCarousel";

export default function Home() {
  return (
    <div className="px-2 md:px-10">
      <ProductCarousel />
      <Auctions />
    </div>
  );
}
