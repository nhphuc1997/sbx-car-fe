import { CloseOutlined, ShopOutlined } from "@ant-design/icons";
import { Button, Descriptions, Divider, Drawer, Typography } from "antd";
import { useState } from "react";
import VehicleInfor from "./VehicleInfor";
import StepPayment from "./StepPayment";

export default function Order() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="w-full">
      <Button
        block
        className="!bg-white !text-[#ad9d6f] !border-[#ad9d6f] hover:!bg-[#ad9d6f] hover:!text-white"
        icon={<ShopOutlined />}
        onClick={() => setOpenDrawer(true)}
      >
        Place order
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
            Place order
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
            Vehicle Infor
          </Typography.Title>
          <VehicleInfor />
        </div>

        <div>
          <Typography.Title level={5} className="capitalize">
            Pay
          </Typography.Title>
          <StepPayment />
        </div>
      </Drawer>
    </div>
  );
}
