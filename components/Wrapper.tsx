"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import HeaderBar from "./header/HeaderBar";
import Footer from "./footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Wrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AntdRegistry>
      <QueryClientProvider client={queryClient}>
        <HeaderBar />
        <main className="px-3 md:px-10">{children}</main>
        <Footer />
      </QueryClientProvider>  
    </AntdRegistry>
  );
}
