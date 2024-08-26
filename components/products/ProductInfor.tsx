import { useLangStore } from "@/stores/lang.store";
import { Divider, Typography } from "antd";

export default function ProductInfor() {
  const langStore = useLangStore((state: any) => state);

  return (
    <div>
      <div className="py-2">
        <Typography.Text className="font-thin !text-lg md:!text-2xl mr-2">
          1953
        </Typography.Text>
        <Typography.Text className="font-semibold !text-lg md:!text-2xl mr-2">
          Tojeiro MG
        </Typography.Text>
        <Typography.Text className="font-thin !text-lg md:!text-2xl mr-2">
          Stirling Moss
        </Typography.Text>
      </div>

      <div className="py-2">
        <Typography.Text className="font-semibold !text-lg md:!text-2xl">
          $98,000
        </Typography.Text>

        <Divider type="vertical" className="!bg-black" />

        <Typography.Text className="font-thin !text-lg md:!text-2xl">
          {langStore.lang.date}: {new Date().toDateString()}
        </Typography.Text>
      </div>
    </div>
  );
}
