"use client";
import ProductImage from "@/components/products/ProductImage";
import ProductInfor from "@/components/products/ProductInfor";
import TabAll from "@/components/products/TabAll";
import TabVideo from "@/components/products/TabVideo";
import { useLangStore } from "@/stores/lang.store";
import { useTabStore } from "@/stores/tab.store";
import { doGet } from "@/utils/doMethod";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Tabs } from "antd";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();
  const langStore = useLangStore((state: any) => state);
  const tabStore = useTabStore((state: any) => state);

  const { data, isLoading } = useQuery({
    queryKey: ["get-detail-product", [id]],
    queryFn: async () => await doGet(`/cars/${id}`),
  });

  return (
    <div>
      <ProductInfor dataInfor={data?.data} isLoading={isLoading} />
      <ProductImage dataInfor={data?.data} />

      <Row gutter={8} className="py-4">
        <Col xs={24} md={18}>
          <Tabs
            onChange={(value) => tabStore.setTab(value)}
            defaultActiveKey="1"
            items={[
              {
                key: "ALL",
                label: langStore.lang.tabAll,
                children: <TabAll dataInfor={data?.data} />,
              },
              {
                key: "EXTERIOR",
                label: langStore.lang.tabExterior,
                children: <TabAll dataInfor={data?.data} />,
              },
              {
                key: "INTERIOR",
                label: langStore.lang.tabInterior,
                children: <TabAll dataInfor={data?.data} />,
              },
              {
                key: "MECHANICAL",
                label: langStore.lang.tabMechanical,
                children: <TabAll dataInfor={data?.data} />,
              },
              {
                key: "DOCUMENTS",
                label: langStore.lang.tabDocuments,
                children: <TabAll dataInfor={data?.data} />,
              },
              {
                key: "VIDEOS",
                label: langStore.lang.tabVideo,
                children: <TabVideo />,
              },
            ]}
            centered
          />
        </Col>
      </Row>
    </div>
  );
}
