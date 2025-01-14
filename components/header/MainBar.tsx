"use client";
import { useLangStore } from "@/stores/lang.store";
import {
  CarFilled,
  LoginOutlined,
  LogoutOutlined,
  MenuOutlined,
  PhoneFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge, Button, Col, Drawer, Image, Row, Segmented } from "antd";
import { useRouter } from "next/navigation";
import en from "@/public/lang/en";
import vi from "@/public/lang/vi";
import { useClerk, useUser } from "@clerk/nextjs";
import { useShoppingCartStore } from "@/stores/shopping-cart.store";
import { useState } from "react";

export default function MainBar() {
  const { isSignedIn, user } = useUser();
  const { signOut, openSignIn } = useClerk();
  const router = useRouter();
  const langStore = useLangStore((state: any) => state);
  const shoppingCartStore = useShoppingCartStore((state: any) => state);
  const [open, setOpen] = useState(false);

  return (
    <div className="px-2 py-3 md:py-4 md:px-10 border">
      <Drawer
        title="Menu"
        placement={"left"}
        closable={true}
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="gap-y-4">
          <div>
            <Button
              className="!bg-[#ad9d6f] !text-white"
              icon={<CarFilled />}
              type="text"
              iconPosition={"start"}
              block
              onClick={() => {
                router.push("/products");
                setOpen(false);
              }}
            >
              SBX Car
            </Button>
          </div>

          <div className="py-4">
            <Button
              className="!bg-[#ad9d6f] !text-white py-4"
              icon={<PhoneFilled />}
              type="text"
              iconPosition={"start"}
              block
              onClick={() => {
                router.push("/phone");
                setOpen(false);
              }}
            >
              SBX Phone
            </Button>
          </div>
        </div>
      </Drawer>

      <Row>
        <Col
          xs={4}
          md={6}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="flex justify-start items-center !h-12">
            <MenuOutlined onClick={() => setOpen(true)} />
          </div>
        </Col>
        <Col
          xs={0}
          md={12}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="flex justify-center items-center">
            <Image
              src="https://sbxcars.com/Assets/Logos/sbx-cars-sb-2024.svg"
              alt=""
              preview={false}
              height={48}
            />
          </div>
        </Col>
        <Col xs={20} md={6}>
          <div className="flex justify-end items-center !h-12">
            <div className="mx-4" onClick={() => router.push("/pay")}>
              <Badge
                count={shoppingCartStore.products?.length}
                showZero
                size="small"
              >
                <Button
                  type="text"
                  shape="circle"
                  icon={<ShoppingCartOutlined />}
                />
              </Badge>
            </div>

            <div>
              <Segmented
                options={["en", "vi"]}
                onChange={(value) => {
                  localStorage.setItem("lang", value);
                  if (value === "en") {
                    langStore.setLang(en);
                    return;
                  }
                  langStore.setLang(vi);
                  return;
                }}
              />
            </div>

            <div className="mx-2">
              {!isSignedIn && (
                <Button
                  className="!bg-[#ad9d6f] !text-white !hidden md:!block"
                  icon={<LoginOutlined className="mr-2" />}
                  onClick={() => openSignIn()}
                >
                  Sign In
                </Button>
              )}

              {isSignedIn && (
                <Button
                  className="!border-[#ad9d6f] !text-black !hidden md:!block"
                  icon={<LogoutOutlined className="mr-2" />}
                  onClick={() => signOut()}
                >
                  Sign out
                </Button>
              )}

              {!isSignedIn && (
                <Button
                  className="!bg-[#ad9d6f] !text-white !block md:!hidden"
                  icon={<LoginOutlined />}
                  onClick={() => openSignIn()}
                />
              )}

              {isSignedIn && (
                <Button
                  className="!bg-[#ad9d6f] !text-white !block md:!hidden"
                  icon={<LogoutOutlined />}
                  onClick={() => signOut()}
                />
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
