"use client";
import ProductImage from "@/components/products/ProductImage";
import ProductInfor from "@/components/products/ProductInfor";
import TabAll from "@/components/products/TabAll";
import TabVideo from "@/components/products/TabVideo";
import { useLangStore } from "@/stores/lang.store";
import { doGet } from "@/utils/doMethod";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Tabs, TabsProps } from "antd";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();
  const langStore = useLangStore((state: any) => state);

  const { data, isLoading } = useQuery({
    queryKey: ["get-detail-product", [id]],
    queryFn: async () => await doGet(`/cars/${id}`),
  });

  const items: TabsProps["items"] = [
    {
      key: "ALL",
      label: langStore.lang.tabAll,
      children: <TabAll />,
    },
    {
      key: "EXTERIOR",
      label: langStore.lang.tabExterior,
      children: <TabAll />,
    },
    {
      key: "INTERIOR",
      label: langStore.lang.tabInterior,
      children: <TabAll />,
    },
    {
      key: "MECHANICAL",
      label: langStore.lang.tabMechanical,
      children: <TabAll />,
    },
    {
      key: "DOCUMENTS",
      label: langStore.lang.tabDocuments,
      children: <TabAll />,
    },
    {
      key: "VIDEOS",
      label: langStore.lang.tabVideo,
      children: <TabVideo />,
    },
  ];

  return (
    <div>
      <ProductInfor dataInfor={data?.data} isLoading={isLoading} />
      <ProductImage dataInfor={data?.data} />

      <Row gutter={8} className="py-4">
        <Col xs={24} md={18}>
          <Tabs defaultActiveKey="1" items={items} centered />
        </Col>
      </Row>
    </div>
  );
}
