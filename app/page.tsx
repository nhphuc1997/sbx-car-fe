import Auctions from "@/components/contents/Auctions";
import ProductCarousel from "@/components/contents/ProductCarousel";

export default function Home() {
  return (
    <div className="">
      <ProductCarousel />
      <Auctions />
    </div>
  );
}
