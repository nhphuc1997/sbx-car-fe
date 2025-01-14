"use client";
import { useFilterPhoneStore } from "@/stores/filter-phone.store";
import { useFilterStore } from "@/stores/filter.store";
import { useLangStore } from "@/stores/lang.store";
import { S3_URL } from "@/utils/aws";
import { doGet } from "@/utils/doMethod";
import { formatCurrency } from "@/utils/format-currency";
import { formatDate } from "@/utils/format-date";
import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Col, Empty, Row, Spin, Typography } from "antd";
import { isEmpty, map } from "lodash";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  name?: string;
  numberItem?: number;
}

export default function Phones({ numberItem = 6 }: Props) {
  const router = useRouter();
  const path = usePathname();
  const langStore = useLangStore((state: any) => state);
  const filterPhoneStore = useFilterPhoneStore((state: any) => state);

  const { data, isLoading } = useQuery({
    queryKey: [
      "get-phones",
      [
        filterPhoneStore.namePhoneFilter,
        filterPhoneStore.categoryFilter,
        filterPhoneStore.colorFilter,
        path,
      ],
    ],
    queryFn: async () => {
      if (path === "/") {
        return await doGet("/phones");
      }

      const $filter: any = {};
      if (!isEmpty(filterPhoneStore.namePhoneFilter)) {
        $filter["$or"] = [
          { name: { $cont: filterPhoneStore.namePhoneFilter } },
          { code: { $cont: filterPhoneStore.namePhoneFilter } },
          { categoryName: { $cont: filterPhoneStore.namePhoneFilter } },
        ];
      }

      if (filterPhoneStore.colorFilter) {
        $filter["color"] = filterPhoneStore.colorFilter;
      }

      return await doGet("/phones", { s: JSON.stringify($filter) });
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
          onClick={() => router.push(`/phones/${element?.id}`)}
          className="cursor-pointer"
        >
          <div className="mb-3 p-3 border">
            <div
              className="bg-center bg-cover bg-no-repeat bg-slate-100 h-[250px]"
              style={{ backgroundImage: `url(${S3_URL}/${element?.s3Key})` }}
            />

            <div className="py-3">
              <div className="flex justify-start">
                <Typography.Text className="font-semibold mr-1">
                  {langStore.lang.name}
                </Typography.Text>
                <Typography.Paragraph className="font-thin !m-0">
                  {element?.name}
                </Typography.Paragraph>
              </div>

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
