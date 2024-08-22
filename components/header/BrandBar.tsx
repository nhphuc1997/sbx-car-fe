"use client";
import { Typography } from "antd";

export default function BrandBar() {
  return (
    <div className="px-3 md:px-10 py-4">
      <div className="flex justify-center items-center">
        <Typography.Text className="text-base font-normal mx-2 cursor-pointer">
          Audi
        </Typography.Text>
      </div>
    </div>
  );
}
