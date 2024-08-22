import { Col, Image, Row, Typography } from "antd";

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
        <Col xs={24} md={18} className="h-[550px]">
          <div
            className="bg-center object-cover bg-cover bg-no-repeat bg-slate-100 w-full h-full"
            style={{
              backgroundImage: `url(https://i.sbxcars.com/cdn-cgi/image/width=900,height=1352,quality=80/auctions/60Lc8taIaaBSV9sGL512F3XpWzqXTF3Z/SBXHyperionVertical001.JPG)`,
            }}
          />
        </Col>
        <Col xs={24} md={6} className="h-[550px] overflow-y-auto">
          <Image.PreviewGroup>
            <Row gutter={8}>
              {assets.map((asset) => (
                <Col span={12}>
                  <Image src={asset} alt="" />
                </Col>
              ))}
            </Row>
          </Image.PreviewGroup>

          <div className="p-4 bg-[#ad9d6f] cursor-pointer flex justify-center items-center">
            <Typography.Text className="!text-white">More</Typography.Text>
          </div>
        </Col>
      </Row>
    </div>
  );
}
