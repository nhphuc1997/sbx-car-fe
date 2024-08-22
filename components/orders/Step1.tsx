import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

type FieldType = {
  phoneNumber?: string;
  address?: string;
};

export default function Step1() {
  return (
    <Form
      name="wrap"
      labelCol={{ flex: "150px" }}
      labelAlign="left"
      labelWrap
      wrapperCol={{ flex: 1 }}
      colon={false}
    >
      <Form.Item<FieldType>
        label="Phone number"
        name="phoneNumber"
        rules={[{ required: true, message: "Please input value!" }]}
      >
        <Input placeholder="+84 6453718292" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please input value!" }]}
      >
        <Input placeholder="84/12 New York City" />
      </Form.Item>

      <Form.Item label="">
        <div className="flex justify-end items-center">
          <Button
            className="!bg-[#ad9d6f] !text-white"
            type="primary"
            htmlType="submit"
            icon={<ArrowRightOutlined />}
          />
        </div>
      </Form.Item>
    </Form>
  );
}
