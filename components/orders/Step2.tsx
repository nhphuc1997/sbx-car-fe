import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, QRCode } from "antd";

export default function Step2() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <QRCode className="py-4" type="svg" value="https://ant.design/" />
      </div>

      <div className="flex justify-end items-center">
        <Button
          className="!bg-[#ad9d6f] !text-white"
          type="primary"
          htmlType="submit"
          icon={<ArrowRightOutlined />}
        />
      </div>
    </div>
  );
}
