"use client";
import ProductImage from "@/components/products/ProductImage";
import ProductInfor from "@/components/products/ProductInfor";
import TabAll from "@/components/products/TabAll";
import TabVideo from "@/components/products/TabVideo";
import { Col, Row, Tabs, TabsProps } from "antd";

const items: TabsProps["items"] = [
  {
    key: "ALL",
    label: "ALL",
    children: <TabAll />,
  },
  {
    key: "EXTERIOR",
    label: "EXTERIOR",
    children: <TabAll />,
  },
  {
    key: "INTERIOR",
    label: "INTERIOR",
    children: <TabAll />,
  },
  {
    key: "MECHANICAL",
    label: "MECHANICAL",
    children: <TabAll />,
  },
  {
    key: "DOCUMENTS",
    label: "DOCUMENTS",
    children: <TabAll />,
  },
  {
    key: "VIDEOS",
    label: "VIDEOS",
    children: <TabVideo />,
  },
];

export default function ProductDetailPage() {
  return (
    <div>
      <ProductInfor />
      <ProductImage />

      <Row gutter={8} className="py-4">
        <Col xs={24} md={18}>
          <Tabs
            defaultActiveKey="1"
            items={items}
            centered
            onChange={(e) => console.log(e)}
          />
        </Col>
      </Row>
    </div>
  );
}
