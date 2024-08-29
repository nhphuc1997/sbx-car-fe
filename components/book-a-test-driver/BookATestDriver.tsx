import { useLangStore } from "@/stores/lang.store";
import { doPost } from "@/utils/doMethod";
import {
  BookOutlined,
  CheckSquareOutlined,
  CloseSquareOutlined,
} from "@ant-design/icons";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { Button, DatePicker, Form, Input, Modal } from "antd";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type FieldType = {
  phoneNumber?: string;
  date?: string;
};

export default function BookATestDriver() {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { user } = useUser();
  const langStore = useLangStore((state: any) => state);
  const btnSubmit = useRef<any>(null);
  const [openModal, setOpenModal] = useState(false);

  const mutation = useMutation({
    mutationKey: ["book-test-driver"],
    mutationFn: async (payload: Record<string, any>) => {
      return await doPost("/book-tests", payload);
    },
  });

  const onFinish = (value: FieldType) => {
    const { phoneNumber, date } = value;
    mutation.mutate({
      phoneNumber: phoneNumber,
      code: uuidv4(),
      carId: Number(id),
      user: user?.primaryEmailAddress?.emailAddress,
      date: date,
    });
    form.resetFields();
  };

  return (
    <div className="w-full">
      <Button
        block
        className="!bg-white !text-[#ad9d6f] !border-[#ad9d6f] hover:!bg-[#ad9d6f] hover:!text-white relative"
        icon={<BookOutlined className="absolute left-2.5 top-1 bottom-1" />}
        onClick={() => setOpenModal(true)}
      >
        {langStore.lang.bookTest}
      </Button>

      <Modal
        closable={false}
        title={langStore.lang.bookTest}
        open={openModal}
        footer={[
          <Button
            key={"cancel"}
            onClick={() => setOpenModal(false)}
            icon={<CloseSquareOutlined />}
          >
            {langStore.lang.cancel}
          </Button>,
          <Button
            key={"submit"}
            className="!bg-[#ad9d6f] !text-white !border-[#ad9d6f]"
            onClick={() => {
              btnSubmit?.current.click();
            }}
            icon={<CheckSquareOutlined />}
          >
            {langStore.lang.submit}
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
            onFinish={onFinish}
          >
            <Form.Item<FieldType>
              label={langStore.lang.phoneNumber}
              name="phoneNumber"
              rules={[{ required: true }]}
            >
              <Input placeholder="+84 365-467-876" />
            </Form.Item>

            <Form.Item<FieldType>
              label={langStore.lang.date}
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
