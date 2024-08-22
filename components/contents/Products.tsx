"use client";
import { Col, Row, Typography } from "antd";

interface Props {
  name?: string;
  numberItem?: number;
}

export default function Products({ numberItem = 6 }: Props) {
  return (
    <Row gutter={12}>
      {[1, 3, 4, 4, 5, 6].map((item) => (
        <Col xs={24} md={12} lg={numberItem}>
          <div className="mb-3 p-3 border">
            <div
              className="bg-center bg-cover bg-no-repeat bg-slate-100 h-[450px]"
              style={{
                backgroundImage: `url(https://i.sbxcars.com/cdn-cgi/image/width=900,height=1352,quality=80/auctions/60Lc8taIaaBSV9sGL512F3XpWzqXTF3Z/SBXHyperionVertical001.JPG)`,
              }}
            />
            <div className="mt-[-66px]">
              <div className="px-3 flex justify-between items-start md:items-center ">
                <div className="">
                  <Typography.Paragraph className="!my-0 font-semibold !text-white">
                    2023
                  </Typography.Paragraph>
                  <Typography.Paragraph className="!my-0 font-semibold !text-white">
                    Hyperion
                  </Typography.Paragraph>
                  <Typography.Paragraph className="!my-0 font-semibold !text-white">
                    XP-1 Prototype
                  </Typography.Paragraph>
                </div>

                <div className="">
                  <Typography.Paragraph className="!my-0 font-thin !text-white">
                    orange
                  </Typography.Paragraph>
                  <Typography.Paragraph className="!my-0 font-thin !text-white">
                    usa
                  </Typography.Paragraph>
                </div>
              </div>
            </div>

            <div className="pt-3 flex justify-between items-center">
              <div className="">
                <Typography.Text className="font-semibold">
                  Price
                </Typography.Text>
                <Typography.Text className="font-thin mx-2">
                  10,2000 $
                </Typography.Text>
              </div>

              <div>
                <Typography.Text className="font-semibold mr-2">
                  Date
                </Typography.Text>
                <Typography.Text className="font-thin">
                  {new Date().toDateString()}
                </Typography.Text>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
