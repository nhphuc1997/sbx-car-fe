"use client";
import { useCartStore } from "@/stores/cart.store";
import { useLangStore } from "@/stores/lang.store";
import { formatCurrency } from "@/utils/format-currency";
import {
  AmazonSquareFilled,
  GoogleCircleFilled,
  LikeFilled,
  PayCircleOutlined,
  SafetyCertificateFilled,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  FormProps,
  Input,
  Row,
  Typography,
} from "antd";
import { map } from "lodash";

type FieldType = {
  username?: string;
  address?: string;
};

export default function Pay() {
  const cartStore = useCartStore((state: any) => state);
  const langStore = useLangStore((state: any) => state);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <Row>
      <Col span={12}>
        <div>
          <Typography className="font-bold flex justify-center items-center py-3">
            Thanh toán nhanh
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
            Liên hệ
          </Typography>
          <div>
            <Input placeholder="Email" />
          </div>
        </div>

        <div>
          <Typography className="font-bold flex justify-start items-center py-3">
            Địa chỉ giao hàng
          </Typography>
          <div>
            <Form
              name="basic"
              wrapperCol={{ span: 24 }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item<FieldType> label="Họ tên" name="username">
                <Input placeholder="Họ tên" />
              </Form.Item>

              <Form.Item<FieldType> label="Địa chỉ" name="address">
                <Input placeholder="Địa chỉ" />
              </Form.Item>

              <Form.Item label={null}>
                <Button type="primary" htmlType="submit" block>
                {langStore.lang.pay}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Col>
      <Col span={12} className="px-4">
        <div className="py-2">
          {map(cartStore.products, (item) => {
            return (
              <div className="border p-4">
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
