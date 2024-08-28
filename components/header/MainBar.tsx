"use client";
import { useLangStore } from "@/stores/lang.store";
import { LoginOutlined, LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Image,
  Input,
  Row,
  Segmented,
  Typography,
} from "antd";
import { useRouter } from "next/navigation";
import en from "@/public/lang/en";
import vi from "@/public/lang/vi";
import { useClerk, useUser } from "@clerk/nextjs";

export default function MainBar() {
  const { isSignedIn, user } = useUser();
  const { signOut, openSignIn } = useClerk();
  const router = useRouter();
  const langStore = useLangStore((state: any) => state);

  return (
    <div className="px-2 py-3 md:py-4 md:px-10 border">
      <Row>
        <Col
          xs={4}
          md={6}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="flex justify-start items-center !h-12">
            <MenuOutlined />
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
                  className="!bg-[#ad9d6f] !text-white !hidden md:!block"
                  icon={<LogoutOutlined className="mr-2" />}
                  onClick={() => signOut()}
                >
                  Sign out
                </Button>
              )}

              <Button
                className="!bg-[#ad9d6f] !text-white !block md:!hidden"
                icon={<LoginOutlined />}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
