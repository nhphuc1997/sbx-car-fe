import { AntdRegistry } from "@ant-design/nextjs-registry";
import HeaderBar from "./header/HeaderBar";
import Footer from "./footer/Footer";

export default function Wrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AntdRegistry>
      <HeaderBar />
      <main>{children}</main>
      <Footer />
    </AntdRegistry>
  );
}
