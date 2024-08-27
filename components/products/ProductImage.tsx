import { Affix, Col, Image, Row, Skeleton } from "antd";
import Order from "../orders/Order";
import BookATestDriver from "../book-a-test-driver/BookATestDriver";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { doGet } from "@/utils/doMethod";
import { map } from "lodash";
import { S3_URL } from "@/utils/aws";

interface Props {
  dataInfor?: Record<string, any>;
}

export default function ProductImage({ dataInfor }: Props) {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["get-exterior", [id]],
    queryFn: async () =>
      await doGet("/exteriors", {
        s: JSON.stringify({
          carId: id,
        }),
      }),
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

        <Col xs={24} md={6} className="h-[500px] pt-2">
          <Affix offsetTop={12}>
            <div>
              <Image.PreviewGroup>
                <Row gutter={8} className="h-[400px] overflow-y-auto">
                  {map(data?.data, (asset, index) => (
                    <Col span={12} key={index}>
                      <Image src={`${S3_URL}/${asset?.s3Key}`} alt="" />
                    </Col>
                  ))}
                </Row>
              </Image.PreviewGroup>
              <div className="h-[92px] flex flex-col items-end justify-end">
                <Order />
                <div className="py-1" />
                <BookATestDriver />
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
    </div>
  );
}
