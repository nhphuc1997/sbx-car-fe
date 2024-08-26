"use client";
import ProductImage from "@/components/products/ProductImage";
import ProductInfor from "@/components/products/ProductInfor";
import TabAll from "@/components/products/TabAll";
import TabVideo from "@/components/products/TabVideo";
import { useLangStore } from "@/stores/lang.store";
import { Col, Row, Tabs, TabsProps } from "antd";

export default function ProductDetailPage() {
  const langStore = useLangStore((state: any) => state);

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
      <ProductInfor />
      <ProductImage />

      <Row gutter={8} className="py-4">
        <Col xs={24} md={18}>
          <Tabs defaultActiveKey="1" items={items} centered />
        </Col>
      </Row>
    </div>
  );
}
