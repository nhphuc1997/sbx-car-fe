import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function Wrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <AntdRegistry>{children}</AntdRegistry>;
}
