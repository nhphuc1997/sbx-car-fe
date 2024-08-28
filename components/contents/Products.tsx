"use client";
import { useFilterStore } from "@/stores/filter.store";
import { useLangStore } from "@/stores/lang.store";
import { S3_URL } from "@/utils/aws";
import { doGet } from "@/utils/doMethod";
import { formatCurrency } from "@/utils/format-currency";
import { formatDate } from "@/utils/format-date";
import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Col, Empty, Row, Spin, Typography } from "antd";
import { delay, isEmpty, map } from "lodash";
import { useRouter } from "next/navigation";

interface Props {
  name?: string;
  numberItem?: number;
}

export default function Products({ numberItem = 6 }: Props) {
  const router = useRouter();
  const langStore = useLangStore((state: any) => state);
  const filterStore = useFilterStore((state: any) => state);

  const { data, isLoading } = useQuery({
    queryKey: [
      "get-products",
      [
        filterStore.nameVehicleFilter,
        filterStore.categoryFilter,
        filterStore.colorFilter,
        filterStore.yearFilter,
      ],
    ],
    queryFn: async () => {
      const $filter: any = {};

      if (!isEmpty(filterStore.nameVehicleFilter)) {
        $filter["$or"] = [
          { shortTitle: { $cont: filterStore.nameVehicleFilter } },
          { subTitle: { $cont: filterStore.nameVehicleFilter } },
        ];
      }

      if (filterStore.categoryFilter) {
        $filter["categoryId"] = filterStore.categoryFilter;
      }

      if (filterStore.colorFilter) {
        $filter["color"] = filterStore.colorFilter;
      }

      if (filterStore.yearFilter) {
        $filter["manufactureYear"] = filterStore.yearFilter;
      }

      return await doGet("/cars", { s: JSON.stringify($filter) });
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
