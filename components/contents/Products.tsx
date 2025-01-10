"use client";
import { useFilterStore } from "@/stores/filter.store";
import { useLangStore } from "@/stores/lang.store";
import { S3_URL } from "@/utils/aws";
import { doGet } from "@/utils/doMethod";
import { formatCurrency } from "@/utils/format-currency";
import { formatDate } from "@/utils/format-date";
import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Col, Empty, Row, Spin, Typography } from "antd";
import { isEmpty, map } from "lodash";
import { usePathname, useRouter } from "next/navigation";
import { initializePaddle, Paddle } from "@paddle/paddle-js";
import { useEffect, useState } from "react";

interface Props {
  name?: string;
  numberItem?: number;
}

export default function Products({ numberItem = 6 }: Props) {
  const router = useRouter();
  const path = usePathname();
  const langStore = useLangStore((state: any) => state);
  const filterStore = useFilterStore((state: any) => state);

  const { data, isLoading } = useQuery({
    queryKey: [
      "paddle-product",
      [filterStore.nameVehicleFilter, filterStore.categoryFilter, path],
    ],
    queryFn: async () => {
      return await doGet("/paddle/product");
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[450px] border">
        <Spin
          spinning={true}
          indicator={<LoadingOutlined className="!text-black" spin />}
        />
      </div>
    );
  }

  if (data?.data?.length <= 0) {
    return (
      <div className="flex justify-center items-center h-[450px] border">
        <Empty />
      </div>
    );
  }

  return (
    <Row gutter={12}>
      {map(data?.data, (element, index: number) => (
        <Col
          key={index}
          xs={24}
          md={12}
          lg={numberItem}
          className="cursor-pointer"
        >
          <div className="mb-3 p-3 border">
            <div
              className="bg-center bg-cover bg-no-repeat bg-slate-100 h-[450px]"
              style={{ backgroundImage: `url(${element?.imageUrl})` }}
            />
            <div className="px-2">
              <div className="flex justify-between items-start md:items-center ">
                <div className="">
                  <Typography.Paragraph className="!my-0 font-semibold !text-black">
                    {langStore.lang.name}: {element?.name}
                  </Typography.Paragraph>
                  <Typography.Paragraph className="!my-0 font-semibold !text-black">
                    {langStore.lang.type}: {element?.type}
                  </Typography.Paragraph>
                  <Typography.Paragraph className="!my-0 font-semibold !text-black">
                    {langStore.lang.taxCategory}: {element?.taxCategory}
                  </Typography.Paragraph>
                  <Typography.Paragraph className="!my-0 font-semibold !text-black">
                    {langStore.lang.description}: {element?.description}
                  </Typography.Paragraph>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center px-2">
              <div className="">
                <Typography.Text className="font-semibold">
                  {langStore.lang.price}
                </Typography.Text>
                <Typography.Text className="font-thin mx-2">
                  {formatCurrency(
                    element?.unitPrice?.amount,
                    localStorage.getItem("lang")
                  )}
                </Typography.Text>
                <Typography.Text className="font-semibold">
                  {element?.unitPrice?.currencyCode}
                </Typography.Text>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
