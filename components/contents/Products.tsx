"use client";
import { useCartStore } from "@/stores/cart.store";
import { useLangStore } from "@/stores/lang.store";
import { doGet } from "@/utils/doMethod";
import { formatCurrency } from "@/utils/format-currency";
import { LoadingOutlined, ShopOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Col, Empty, Row, Spin, Typography } from "antd";
import { map } from "lodash";

interface Props {
  name?: string;
  numberItem?: number;
}

export default function Products({ numberItem = 6 }: Props) {
  const langStore = useLangStore((state: any) => state);
  const cartStore = useCartStore((state: any) => state);

  const { data, isLoading } = useQuery({
    queryKey: ["paddle-product"],
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

  const addToCart = (product: any) => {
    cartStore.setCart(product);
  };

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

            <div className="py-2">
              <Button
                onClick={() => addToCart(element)}
                block
                icon={<ShopOutlined />}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
