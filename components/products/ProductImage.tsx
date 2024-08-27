import { Affix, Col, Image, Row, Skeleton } from "antd";
import Order from "../orders/Order";
import BookATestDriver from "../book-a-test-driver/BookATestDriver";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { doGet } from "@/utils/doMethod";
import { map } from "lodash";
import { S3_URL } from "@/utils/aws";
import { useTabStore } from "@/stores/tab.store";
import { getUrlsBaseOn } from "@/utils/tab";

interface Props {
  dataInfor?: Record<string, any>;
}

export default function ProductImage({ dataInfor }: Props) {
  const { id } = useParams();
  const tabStore = useTabStore((state: any) => state);

  const { data, isLoading } = useQuery({
    queryKey: ["get-exterior", [id, tabStore.tab]],
    queryFn: async () => {
      const endpoint: any = getUrlsBaseOn(tabStore.tab);

      return await doGet(endpoint, {
        s: JSON.stringify({ carId: id }),
      });
    },
  });

  if (isLoading) {
    return (
      <div>
        <Row gutter={8}>
          <Col xs={24} md={18} className="pt-2">
            <Skeleton.Image active={true} className="!w-full !h-[500px]" />
          </Col>
          <Col xs={24} md={6} className="pt-2 space-y-5">
            <Skeleton.Input active={true} className="!h-[110px] !w-full" />
            <Skeleton.Input active={true} className="!h-[110px] !w-full" />
            <Skeleton.Input active={true} className="!h-[110px] !w-full" />
            <Skeleton.Input active={true} className="!h-[110px] !w-full" />
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <div className="">
      <Row gutter={8}>
        <Col xs={24} md={18} className="h-[500px] pt-2">
          <img
            className="!w-full h-full object-cover"
            src={`${S3_URL}/${dataInfor?.s3Key}`}
            alt=""
          />
        </Col>

        <Col xs={24} md={6} className="pt-2">
          <div className="flex flex-col h-[492px] justify-between">
            <div className="!h-[450px] overflow-y-auto">
              <Row gutter={8} className="">
                {map(data?.data, (asset, index) => (
                  <Col span={12} key={index} className="pb-2">
                    <div
                      className=" bg-center bg-cover bg-no-repeat bg-slate-100 h-[100px]"
                      style={{
                        backgroundImage: `url(${S3_URL}/${asset?.s3Key})`,
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </div>

            <div className="pt-2 flex flex-col items-end justify-end space-y-2">
              <Order />
              <BookATestDriver />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
