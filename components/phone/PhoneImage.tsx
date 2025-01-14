import { Col, Image, Row, Typography } from "antd";
import Order from "../orders/Order";
import { S3_URL } from "@/utils/aws";

interface Props {
  dataInfor?: Record<string, any>;
}

export default function PhoneImage({ dataInfor }: Props) {
  return (
    <div className="">
      <Row gutter={8}>
        <Col xs={24} md={18} className="h-[500px] pt-2">
          <Image
            height={500}
            className="!w-full h-full object-cover"
            src={`${S3_URL}/${dataInfor?.s3Key}`}
            alt=""
          />
        </Col>

        <Col xs={24} md={6} className="pt-2">
          <div className="flex flex-col h-[492px] justify-between">
            <div className="pt-2 flex flex-col items-end justify-end space-y-2">
              <Order />
            </div>

            <div className="p-4 border">
              <div className="flex justify-start items-center">
                <Image
                  className="!w-40 !h-40"
                  alt=""
                  preview={false}
                  src="https://m.media-amazon.com/images/G/01/marketing/prime/logos/established/2021/prime-logo-rgb-prime-blue._CB601899009_.svg"
                />
                <div className="pl-2">
                  <Typography.Paragraph className="!m-0">
                    Free fast delivery. No order minimum. Exclusive savings.
                    Start your 30-day free trial of Prime.
                  </Typography.Paragraph>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
