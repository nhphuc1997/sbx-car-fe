"use client";
import ProductImage from "@/components/products/ProductImage";
import ProductInfor from "@/components/products/ProductInfor";
import TabAll from "@/components/products/TabAll";
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
    children: "Content of Tab Pane 2",
  },
  {
    key: "INTERIOR",
    label: "INTERIOR",
    children: "Content of Tab Pane 3",
  },
  {
    key: "MECHANICAL",
    label: "MECHANICAL",
    children: "Content of Tab Pane 3",
  },
  {
    key: "DOCUMENTS",
    label: "DOCUMENTS",
    children: "Content of Tab Pane 3",
  },
  {
    key: "VIDEOS",
    label: "VIDEOS",
    children: "Content of Tab Pane 3",
  },
];

export default function ProductDetailPage() {
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
