"use client";
import { LoginOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Col, Image, Input, Row } from "antd";
import { useRouter } from "next/navigation";

export default function MainBar() {
  const router = useRouter();

  return (
    <div className="px-2 py-3 md:py-4 md:px-10 border">
      <Row>
        <Col
          xs={4}
          md={6}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="flex justify-start items-center !h-12">
            <MenuOutlined />
          </div>
        </Col>
        <Col
          xs={0}
          md={12}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="flex justify-center items-center">
            <Image src="brand.svg" alt="" preview={false} height={48} />
          </div>
        </Col>
        <Col xs={20} md={6}>
          <div className="flex justify-end items-center !h-12">
            <div>
              <Input placeholder="Search for a vehicle" />
            </div>
            <div className="mx-2">
              <Button
                className="!bg-[#ad9d6f] !text-white !hidden md:!block"
                icon={<LoginOutlined className="mr-2" />}
              >
                Sign In
              </Button>

              <Button
                className="!bg-[#ad9d6f] !text-white !block md:!hidden"
                icon={<LoginOutlined />}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
