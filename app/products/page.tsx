import Products from "@/components/contents/Products";
import Filter from "@/components/products/Filter";
import { Divider } from "antd";

export default function ProductIndexPage() {
  return (
    <div>
      <Filter />
      <div className="py-4">
        <Products />
      </div>

      <Divider />
    </div>
  );
}
