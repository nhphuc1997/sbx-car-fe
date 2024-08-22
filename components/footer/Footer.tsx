"use client";
import { SendOutlined } from "@ant-design/icons";
import { Button, Col, Image, Input, Row, Typography } from "antd";

export default function Footer() {
  return (
    <>
      <footer className="px-3 md:px-10">
        <Row gutter={8}>
          <Col xs={24} md={8}>
            <div className="flex justify-center items-center py-3">
              <Image src="brand.svg" alt="" preview={false} height={50} />
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="flex justify-start items-center py-3">
              <Input className="" placeholder="Email address" />
              <Button
                className="ml-2 !bg-black !text-white"
                icon={<SendOutlined />}
              />
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="flex justify-center items-center py-3">
              <ul className="!list-disc px-3">
                <li>About us</li>
                <li>Team</li>
                <li>Contact us</li>
                <li>Sell your vehicle</li>
              </ul>
              <div className="px-3" />
              <ul className="!list-disc px-3">
                <li>FAQ</li>
                <li>Careers</li>
                <li>Terms of use</li>
                <li>Privacy policy</li>
              </ul>
            </div>
          </Col>
        </Row>
      </footer>

      <div className="bg-[#ededed] flex justify-center items-center py-1">
        <Typography.Text className="font-thin">
          © Copyright 2024 All rights reserved SB Media USA Inc
        </Typography.Text>
      </div>
    </>
  );
}
