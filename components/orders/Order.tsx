import { CloseOutlined, ShopOutlined } from "@ant-design/icons";
import { Button, Descriptions, Divider, Drawer, Typography } from "antd";
import { useState } from "react";
import VehicleInfor from "./VehicleInfor";
import StepPayment from "./StepPayment";
import { useLangStore } from "@/stores/lang.store";

export default function Order() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const langStore = useLangStore((state: any) => state);

  return (
    <div className="w-full">
      <Button
        block
        className="!bg-white !text-[#ad9d6f] !border-[#ad9d6f] hover:!bg-[#ad9d6f] hover:!text-white"
        icon={<ShopOutlined />}
        onClick={() => setOpenDrawer(true)}
      >
        {langStore.lang.place_order}
      </Button>

      <Drawer
        placement={"right"}
        width={512}
        open={openDrawer}
        closable={false}
      >
        <div className="flex justify-between items-center">
          <div />
          <Typography.Title level={4} className="uppercase">
            {langStore.lang.place_order}
          </Typography.Title>

          <Button
            onClick={() => setOpenDrawer(false)}
            type="text"
            icon={<CloseOutlined />}
          />
        </div>
        <Divider className="!my-1" />

        <div>
          <Typography.Title level={5} className="capitalize">
            {langStore.lang.vehicle_infor}
          </Typography.Title>
          <VehicleInfor />
        </div>

        <div>
          <Typography.Title level={5} className="capitalize">
            {langStore.lang.pay}
          </Typography.Title>
          <StepPayment />
        </div>
      </Drawer>
    </div>
  );
}
