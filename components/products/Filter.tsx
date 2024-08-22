import { DeleteOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Input, Row, Select } from "antd";

export default function Filter() {
  return (
    <Row gutter={8}>
      <Col span={6}>
        <Input placeholder="Name vehicle" />
      </Col>
      <Col span={4}>
        <Select
          className="w-full"
          placeholder="Brand"
          options={[{ value: "lucy", label: "Lucy" }]}
        />
      </Col>
      <Col span={3}>
        <Select
          className="w-full"
          placeholder="Color"
          options={[{ value: "lucy", label: "Lucy" }]}
        />
      </Col>
      <Col span={3}>
        <DatePicker className="w-full" picker="year" />
      </Col>
      <Col span={3}>
        <Button icon={<DeleteOutlined />} className="!bg-black !text-white">
          Reset Filter
        </Button>
      </Col>
    </Row>
  );
}
