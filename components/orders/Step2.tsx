import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, QRCode } from "antd";

interface Props {
  changeCurrentStep: any;
}

export default function Step2({ changeCurrentStep }: Props) {
  return (
    <div className="p-4 border">
      <div className="flex justify-center items-center">
        <QRCode className="py-4" type="svg" value="https://ant.design/" />
      </div>

      <div className="flex justify-end items-center">
        <Button
          className="!bg-[#ad9d6f] !text-white"
          onClick={changeCurrentStep}
          icon={<ArrowRightOutlined />}
        />
      </div>
    </div>
  );
}
