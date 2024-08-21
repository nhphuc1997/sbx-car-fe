"use client";
import { Divider, Typography } from "antd";

export default function TopBar() {
  return (
    <div className="hidden md:flex bg-[#ededed] px-10 justify-start items-center">
      <div>
        <Typography.Text className="font-thin mr-2">US</Typography.Text>
        <Typography.Text className="font-thin">+1 323-407-8523</Typography.Text>
      </div>
      <Divider type="vertical" className="!bg-[#EAEAEA]" />

      <div>
        <Typography.Text className="font-thin mr-2">UK</Typography.Text>
        <Typography.Text className="font-thin">
          +44 20 4525 8014
        </Typography.Text>
      </div>
      <Divider type="vertical" className="!bg-[#EAEAEA]" />

      <div>
        <Typography.Text className="font-thin mr-2">UAE</Typography.Text>
        <Typography.Text className="font-thin">+971 4 876 1764</Typography.Text>
      </div>
      <Divider type="vertical" className="!bg-[#EAEAEA]" />

      <div>
        <Typography.Text className="font-thin">
          sales@sbxcars.com
        </Typography.Text>
      </div>
    </div>
  );
}
