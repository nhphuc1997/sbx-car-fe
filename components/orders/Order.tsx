import {
  CloseOutlined,
  PayCircleOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {
  Button,
  Descriptions,
  Divider,
  Drawer,
  notification,
  Typography,
} from "antd";
import { useState } from "react";
import VehicleInfor from "./VehicleInfor";
import StepPayment from "./StepPayment";
import { useLangStore } from "@/stores/lang.store";
import { useShoppingCartStore } from "@/stores/shopping-cart.store";
import { useCarStore } from "@/stores/car.store";
import { usePathname, useRouter } from "next/navigation";
import { usePhoneStore } from "@/stores/phone.store";
import { useUser } from "@clerk/nextjs";
import { formatCurrency } from "@/utils/format-currency";

export default function Order() {
  const router = useRouter();
  const path = usePathname();
  const [api, contextHolder] = notification.useNotification();
  const { isSignedIn, user } = useUser();

  const langStore = useLangStore((state: any) => state);
  const shoppingCartStore = useShoppingCartStore((state: any) => state);
  const carStore = useCarStore((state: any) => state);
  const phoneStore = usePhoneStore((state: any) => state);

  const [openDrawer, setOpenDrawer] = useState(false);

  const addToCart = (product: any) => {
    api.info({
      message: `System notification`,
      description: `Add to cart successfully`,
    });
    shoppingCartStore.setShoppingCart(product);
  };

  return (
    <div className="w-full">
      {contextHolder}
      {path.split("/").includes("phones") && (
        <div className="mb-2">
          <Typography.Paragraph className="!m-0">
            <Typography.Text className="!font-bold">Category</Typography.Text>{" "}
            <Typography.Text className="!font-thin">
              {phoneStore.phone?.categoryName}
            </Typography.Text>{" "}
          </Typography.Paragraph>

          <Typography.Paragraph className="!m-0">
            <Typography.Text className="!font-bold">Code</Typography.Text>{" "}
            <Typography.Text className="!font-thin">
              {phoneStore.phone?.code}
            </Typography.Text>{" "}
          </Typography.Paragraph>

          <Typography.Paragraph className="!m-0">
            <Typography.Text className="!font-bold">Price</Typography.Text>{" "}
            <Typography.Text className="!font-thin">
              {formatCurrency(
                phoneStore.phone?.price,
                localStorage.getItem("lang")
              )}
            </Typography.Text>{" "}
          </Typography.Paragraph>
        </div>
      )}
      <div className="w-full flex gap-2">
        <div className="w-1/2">
          <Button
            block
            className="!bg-white !text-[#ad9d6f] !border-[#ad9d6f] hover:!bg-[#ad9d6f] hover:!text-white relative"
            icon={<ShoppingCartOutlined className="" />}
            onClick={() =>
              addToCart(
                path.split("/").includes("phones")
                  ? phoneStore.phone
                  : carStore.car
              )
            }
          >
            {langStore.lang.add_to_cart}
          </Button>
        </div>

        <div className="w-1/2">
          <Button
            block
            className="!bg-white !text-[#ad9d6f] !border-[#ad9d6f] hover:!bg-[#ad9d6f] hover:!text-white relative"
            icon={<PayCircleOutlined className="" />}
            onClick={() => {
              if (!isSignedIn) {
                api.info({
                  message: `System notification`,
                  description: `You must be login to perform this action`,
                });
                return;
              }
              router.push("/pay");
            }}
            disabled={shoppingCartStore.products?.length <= 0}
          >
            {langStore.lang.pay}
          </Button>
        </div>
      </div>

      {!path.split("/").includes("phones") && (
        <div className="pt-2">
          <Button
            block
            className="!bg-white !text-[#ad9d6f] !border-[#ad9d6f] hover:!bg-[#ad9d6f] hover:!text-white relative"
            icon={<ShopOutlined className="absolute left-2.5 top-1 bottom-1" />}
            onClick={() => setOpenDrawer(true)}
          >
            {langStore.lang.place_order}
          </Button>
        </div>
      )}

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
