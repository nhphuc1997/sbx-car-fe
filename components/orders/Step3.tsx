import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, QRCode, Result } from "antd";

export default function Step2() {
  return (
    <div>
      <Result
        status="success"
        title="Successfully Purchased Vehicle"
        subTitle="Order number: 2017182818828182881"
        extra={[
          <Button className="!bg-[#ad9d6f] !text-white border-[#ad9d6f]">
            Go Home
          </Button>,
        ]}
      />
    </div>
  );
}
