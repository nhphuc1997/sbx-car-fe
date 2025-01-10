"use client";
import { useCartStore } from "@/stores/cart.store";
import { useLangStore } from "@/stores/lang.store";
import { doGet, doPost } from "@/utils/doMethod";
import { formatCurrency } from "@/utils/format-currency";
import {
  AmazonSquareFilled,
  GoogleCircleFilled,
  LikeFilled,
  PayCircleOutlined,
  PropertySafetyOutlined,
  SafetyCertificateFilled,
} from "@ant-design/icons";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import {
  Button,
  Card,
  Col,
  Form,
  FormProps,
  Input,
  notification,
  Row,
  Typography,
} from "antd";
import { map } from "lodash";
import { v4 as uuidv4 } from "uuid";

type FieldType = {
  username?: string;
  address?: string;
};

export default function Pay() {
  const { user } = useUser();
  const cartStore = useCartStore((state: any) => state);
  const langStore = useLangStore((state: any) => state);
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const mutation = useMutation({
    mutationKey: ["create-order"],
    mutationFn: async (payload: Record<string, any>) => {
      return await doPost("/order", payload);
    },
    async onSuccess(data, variables, context) {
      api.success({
        message: `Order successfully`,
        description: (
          <Typography.Text>{`Your order code: ${data?.data?.order_number}`}</Typography.Text>
        ),
      });
      await doGet(`/order/send-order-sms/${data?.data?.order_number}`);
      form.resetFields();
    },
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const { address, username } = values;
    let price = 0;
    cartStore.products?.map((item: any) => (price += item?.unitPrice?.amount));
    mutation.mutate({
      address: address,
      order_number: uuidv4(),
      user_name: username,
      total_price: String(price),
      email: user?.primaryEmailAddress?.emailAddress,
    });
    form.resetFields();
  };

  return (
    <Row>
      {contextHolder}
      <Col span={12}>
        <div>
          <Typography className="font-bold flex justify-center items-center py-3">
            {langStore.lang.quick_pay}
          </Typography>
          <div className="border p-4">
            <div className="py-2">
              <Button block icon={<PayCircleOutlined />}>
                PayPal
              </Button>
            </div>
            <div className="w-full flex justify-center items-center gap-2">
              <Button block icon={<AmazonSquareFilled />}>
                AmazonPay
              </Button>

              <Button block icon={<GoogleCircleFilled />}>
                GooglePay
              </Button>
            </div>
          </div>
        </div>

        <div>
          <Typography className="font-bold flex justify-start items-center py-3">
            {langStore.lang.contact}
          </Typography>
          <div>
            <Input placeholder="Email" />
          </div>
        </div>

        <div>
          <Typography className="font-bold flex justify-start items-center py-3">
            {langStore.lang.address}
          </Typography>
          <div className="p-4 border">
            <Form
              name="basic"
              wrapperCol={{ span: 24 }}
              onFinish={onFinish}
              autoComplete="off"
              form={form}
            >
              <Form.Item<FieldType>
                label="Họ tên"
                name="username"
                rules={[{ required: true, message: "Required" }]}
              >
                <Input placeholder="Họ tên" />
              </Form.Item>

              <Form.Item<FieldType>
                label="Địa chỉ"
                name="address"
                rules={[{ required: true, message: "Required" }]}
              >
                <Input placeholder="Địa chỉ" />
              </Form.Item>

              <Form.Item label={null}>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  icon={<PropertySafetyOutlined />}
                >
                  {langStore.lang.pay}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Col>
      <Col span={12} className="px-4">
        <div className="py-2">
          {map(cartStore.products, (item, index) => {
            return (
              <div className="border p-4" key={index}>
                <div className="flex justify-start items-start">
                  <div>
                    <img
                      alt="example"
                      src={item?.imageUrl}
                      className="w-28 h-28"
                    />
                  </div>
                  <div className="px-4">
                    <Typography.Paragraph strong className="!mb-0">
                      {langStore.lang.name}: {item?.name}
                    </Typography.Paragraph>
                    <Typography.Paragraph strong className="!mb-0">
                      {langStore.lang.price}:
                      {formatCurrency(
                        item?.unitPrice?.amount,
                        localStorage.getItem("lang")
                      )}
                    </Typography.Paragraph>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-4 border">
          <div className="my-2">
            <Typography className="font-bold">
              <SafetyCertificateFilled /> Mua với sự an tâm
            </Typography>
          </div>

          <div className="">
            <p>
              <LikeFilled /> Đảm bảo hoàn tiền trong 30 ngày
            </p>
            <p>
              <LikeFilled /> Miễn phí vận chuyển và trả hàng
            </p>
            <p>
              <LikeFilled /> Bảo hành 12 tháng
            </p>
            <p>
              <LikeFilled /> Chất lượng đảm bảo, không có phí phụ thu
            </p>
          </div>
        </div>

        <div className="py-2">
          <div className="p-4 border">
            <Typography className="font-bold">
              <SafetyCertificateFilled /> Thanh toán an toàn 100%
            </Typography>
          </div>
        </div>
      </Col>
    </Row>
  );
}
