import { BookOutlined, ShopOutlined } from "@ant-design/icons";
import { Button, Col, Image, Row, Typography } from "antd";

export default function ProductImage() {
  const assets = [
    "/assets/car1.jpeg",
    "/assets/car2.jpeg",
    "/assets/car3.jpeg",
    "/assets/car4.jpeg",
    "/assets/car5.jpeg",
    "/assets/car6.jpeg",
    "/assets/car7.jpeg",
    "/assets/car8.jpeg",
  ];

  return (
    <div className="">
      <Row gutter={8}>
        <Col xs={24} md={18} className="h-[500px] pt-2">
          <img
            className="!w-full h-full object-cover"
            src="https://i.sbxcars.com/cdn-cgi/image/width=900,height=1352,quality=80/auctions/60Lc8taIaaBSV9sGL512F3XpWzqXTF3Z/SBXHyperionVertical001.JPG"
            alt=""
          />
        </Col>

        <Col xs={24} md={6} className="h-[500px] pt-2">
          <Image.PreviewGroup>
            <Row gutter={8} className="h-[400px] overflow-y-auto">
              {assets.map((asset) => (
                <Col span={12}>
                  <Image src={asset} alt="" />
                </Col>
              ))}
            </Row>
          </Image.PreviewGroup>
          <div className="h-[92px] flex flex-col items-end justify-end">
            <Button
              block
              className="!bg-white !text-[#ad9d6f] !border-[#ad9d6f] hover:!bg-[#ad9d6f] hover:!text-white"
              icon={<ShopOutlined />}
            >
              Place order
            </Button>
            <div className="py-1" />
            <Button
              block
              className="!bg-white !text-[#ad9d6f] !border-[#ad9d6f] hover:!bg-[#ad9d6f] hover:!text-white"
              icon={<BookOutlined />}
            >
              Book test a driver
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
