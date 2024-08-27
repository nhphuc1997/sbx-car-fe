"use client";
import { useLangStore } from "@/stores/lang.store";
import { S3_URL } from "@/utils/aws";
import { doGet } from "@/utils/doMethod";
import { formatCurrency } from "@/utils/format-currency";
import { formatDate } from "@/utils/format-date";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Typography } from "antd";
import { map } from "lodash";
import { useRouter } from "next/navigation";

interface Props {
  name?: string;
  numberItem?: number;
}

export default function Products({ numberItem = 6 }: Props) {
  const router = useRouter();
  const langStore = useLangStore((state: any) => state);

  const { data } = useQuery({
    queryKey: ["get-products"],
    queryFn: async () => await doGet("/cars"),
  });

  return (
    <Row gutter={12}>
      {map(data?.data, (element, index: number) => (
        <Col
          key={index}
          xs={24}
          md={12}
          lg={numberItem}
          onClick={() => router.push(`/products/${element?.id}`)}
          className="cursor-pointer"
        >
          <div className="mb-3 p-3 border">
            <div
              className="bg-center bg-cover bg-no-repeat bg-slate-100 h-[450px]"
              style={{ backgroundImage: `url(${S3_URL}/${element?.s3Key})` }}
            />
            <div className="mt-[-66px]">
              <div className="px-3 flex justify-between items-start md:items-center ">
                <div className="">
                  <Typography.Paragraph className="!my-0 font-semibold !text-white">
                    {element?.manufactureYear}
                  </Typography.Paragraph>
                  <Typography.Paragraph className="!my-0 font-semibold !text-white">
                    {element?.subTitle}
                  </Typography.Paragraph>
                  <Typography.Paragraph className="!my-0 font-semibold !text-white">
                    {element?.shortTitle}
                  </Typography.Paragraph>
                </div>
              </div>
            </div>

            <div className="pt-3 flex justify-between items-center">
              <div className="">
                <Typography.Text className="font-semibold">
                  {langStore.lang.price}
                </Typography.Text>
                <Typography.Text className="font-thin mx-2">
                  {formatCurrency(element?.price, localStorage.getItem("lang"))}
                </Typography.Text>
              </div>

              <div>
                <Typography.Text className="font-semibold mr-2">
                  {langStore.lang.date}
                </Typography.Text>
                <Typography.Text className="font-thin">
                  {formatDate(element?.createAt, localStorage.getItem("lang"))}
                </Typography.Text>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
