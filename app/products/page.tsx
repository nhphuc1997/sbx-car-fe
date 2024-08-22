"use client";
import Products from "@/components/contents/Products";
import Filter from "@/components/products/Filter";
import { Divider, Typography } from "antd";

export default function ProductIndexPage() {
  return (
    <div>
      <div>
        <Typography.Title level={5}>Filter:</Typography.Title>
        <Filter />
      </div>

      <div className="py-4">
        <Typography.Title level={5}>Products:</Typography.Title>
        <Products />
      </div>

      <Divider />
    </div>
  );
}
