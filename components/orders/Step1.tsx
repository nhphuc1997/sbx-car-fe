import { useOrderStore } from "@/stores/order.store";
import { doPost } from "@/utils/doMethod";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import { useParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

type FieldType = {
  phoneNumber?: string;
};

interface Props {
  changeCurrentStep: any;
}

export default function Step1({ changeCurrentStep }: Props) {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { user } = useUser();
  const orderStore = useOrderStore((state: any) => state);

  const mutation = useMutation({
    mutationKey: ["create-order"],
    mutationFn: async (payload: Record<string, any>) => {
      return await doPost("/orders", payload);
    },
    onSuccess(data, variables, context) {
      orderStore.setCode(data?.data?.code);
    },
  });

  const onFinish = (value: FieldType) => {
    const { phoneNumber } = value;
    mutation.mutate({
      phoneNumber: phoneNumber,
      code: uuidv4(),
      carId: Number(id),
      user: user?.primaryEmailAddress?.emailAddress,
    });
    form.resetFields();
    changeCurrentStep();
  };

  return (
    <div className="p-4 border">
      <Form
        form={form}
        name="wrap"
        labelCol={{ flex: "150px" }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        onFinish={onFinish}
      >
        <Form.Item<FieldType>
          label="Phone number"
          name="phoneNumber"
          rules={[{ required: true, message: "Please input value!" }]}
        >
          <Input placeholder="+84 6453718292" />
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
    </div>
  );
}
