"use client";
import Products from "@/components/contents/Products";
import Filter from "@/components/products/Filter";
import { useLangStore } from "@/stores/lang.store";
import { Divider, Typography } from "antd";

export default function ProductIndexPage() {
  const langStore = useLangStore((state: any) => state);

  return (
    <div>
      <div>
        <Typography.Title level={5}>{langStore.lang.filter}:</Typography.Title>
        <Filter />
      </div>

      <div className="py-4">
        <Typography.Title level={5}>
          {langStore.lang.products}:
        </Typography.Title>
        <Products />
      </div>

      <Divider />
    </div>
  );
}
