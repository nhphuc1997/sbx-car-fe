import { ShopOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useLangStore } from "@/stores/lang.store";

export default function Order() {
  const langStore = useLangStore((state: any) => state);

  return (
    <div className="w-full">
      <Button
        block
        className="!bg-white !text-[#ad9d6f] !border-[#ad9d6f] hover:!bg-[#ad9d6f] hover:!text-white relative"
        icon={<ShopOutlined className="absolute left-2.5 top-1 bottom-1" />}
      >
        {langStore.lang.place_order}
      </Button>
    </div>
  );
}
