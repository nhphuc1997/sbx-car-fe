import { useOrderStore } from "@/stores/order.store";
import { Button, Result } from "antd";
import { useRouter } from "next/navigation";

export default function Step2() {
  const router = useRouter();
  const orderStore = useOrderStore((state: any) => state);

  return (
    <div className="p-4 border">
      <Result
        status="success"
        title="Successfully Purchased Vehicle"
        subTitle={`Order number: ${orderStore.code}`}
        extra={[
          <Button
            key={"go_home"}
            onClick={() => router.push("/")}
            className="!bg-[#ad9d6f] !text-white border-[#ad9d6f]"
          >
            Go Home
          </Button>,
        ]}
      />
    </div>
  );
}
