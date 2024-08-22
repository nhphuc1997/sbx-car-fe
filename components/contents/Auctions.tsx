"use client";
import { Button, Typography } from "antd";
import Products from "./Products";
import { DownOutlined } from "@ant-design/icons";

export default function Auctions() {
  return (
    <div className="py-4">
      <div className="">
        <Typography.Text className="mr-2 font-semibold">
          Auctions
        </Typography.Text>
        <Typography.Text className="font-thin">Country: ALL</Typography.Text>
      </div>

      <div className="py-4">
        <Products />
      </div>

      <div className="py-4 flex justify-center items-center">
        <Button icon={<DownOutlined />} />
      </div>
    </div>
  );
}
