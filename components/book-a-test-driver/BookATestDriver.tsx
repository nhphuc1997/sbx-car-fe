import {
  BookOutlined,
  CheckSquareOutlined,
  CloseSquareOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal } from "antd";
import { useRef, useState } from "react";

type FieldType = {
  phoneNumber?: string;
  date?: string;
};

export default function BookATestDriver() {
  const btnSubmit = useRef<any>(null);
  const [form] = Form.useForm();

  const [openModal, setOpenModal] = useState(false);

  const bookSchedule = (value: FieldType) => {
    const { phoneNumber, date } = value;
    form.resetFields();
  };

  return (
    <div className="w-full">
      <Button
        block
        className="!bg-white !text-[#ad9d6f] !border-[#ad9d6f] hover:!bg-[#ad9d6f] hover:!text-white"
        icon={<BookOutlined />}
        onClick={() => setOpenModal(true)}
      >
        Book a test driver
      </Button>

      <Modal
        closable={false}
        title={"Book a test driver"}
        open={openModal}
        footer={[
          <Button
            onClick={() => setOpenModal(false)}
            icon={<CloseSquareOutlined />}
          >
            Cancel
          </Button>,
          <Button
            className="!bg-[#ad9d6f] !text-white !border-[#ad9d6f]"
            onClick={() => {
              btnSubmit?.current.click();
            }}
            icon={<CheckSquareOutlined />}
          >
            Submit
          </Button>,
        ]}
      >
        <div>
          <Form
            form={form}
            name="wrap"
            labelCol={{ flex: "150px" }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            onFinish={bookSchedule}
          >
            <Form.Item<FieldType>
              label="Phone number"
              name="phoneNumber"
              rules={[{ required: true }]}
            >
              <Input placeholder="+84 365-467-876" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Date"
              name="date"
              rules={[{ required: true }]}
            >
              <DatePicker className="!w-full" />
            </Form.Item>

            <Form.Item label="" className="!hidden">
              <Button ref={btnSubmit} htmlType="submit" />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
