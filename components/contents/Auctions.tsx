"use client";
import { Button, Typography } from "antd";
import Products from "./Products";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useLangStore } from "@/stores/lang.store";

export default function Auctions() {
  const router = useRouter();
  const langStore = useLangStore((state: any) => state);

  return (
    <div className="py-4">
      <div className="">
        <Typography.Text className="mr-2 font-semibold">
          Auctions
        </Typography.Text>
        <Typography.Text className="font-thin">Country: ALL</Typography.Text>
      </div>

      <div className="py-4">
        <Products numberItem={8} />
      </div>

      <div className="py-4 flex justify-center items-center">
        <Button
          icon={<DownOutlined />}
          onClick={() => router.push("/products")}
        />
      </div>
    </div>
  );
}
