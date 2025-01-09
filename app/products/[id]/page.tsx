"use client";
import ProductImage from "@/components/products/ProductImage";
import ProductInfor from "@/components/products/ProductInfor";
import TabAll from "@/components/products/TabAll";
import TabVideo from "@/components/products/TabVideo";
import { useCarStore } from "@/stores/car.store";
import { useLangStore } from "@/stores/lang.store";
import { useTabStore } from "@/stores/tab.store";
import { doGet } from "@/utils/doMethod";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Tabs } from "antd";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();
  const carStore = useCarStore((state: any) => state);

  const { data, isLoading } = useQuery({
    queryKey: ["get-detail-product", [id]],
    queryFn: async () => {
      const response = await doGet(`/product/${id}`);
      carStore.setCar(response?.data);
      return response;
    },
  });

  return (
    <div>
      <ProductInfor dataInfor={data?.data} isLoading={isLoading} />
      <ProductImage dataInfor={data?.data} />
    </div>
  );
}
