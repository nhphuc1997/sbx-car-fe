import { Button, Result } from "antd";
import { useRouter } from "next/navigation";

export default function Step2() {
  const router = useRouter();

  return (
    <div className="p-4 border">
      <Result
        status="success"
        title="Successfully Purchased Vehicle"
        subTitle="Order number: 2017182818828182881"
        extra={[
          <Button
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
