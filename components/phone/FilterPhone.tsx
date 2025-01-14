import { useFilterPhoneStore } from "@/stores/filter-phone.store";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Input, Row, Select } from "antd";

export default function FilterPhone() {
  const filterStore = useFilterPhoneStore((state: any) => state);

  return (
    <Row gutter={8}>
      <Col span={6}>
        <Input
          placeholder="Phone's name"
          value={filterStore.nameVehicleFilter}
          onChange={(e) => filterStore.setNameVehicleFilter(e.target.value)}
        />
      </Col>
      <Col span={4}>
        <Select
          value={filterStore.categoryFilter}
          className="w-full"
          placeholder="Phone's brand"
          options={filterStore.categoryOptions}
          onChange={(e) => filterStore.setCategoryFilter(e)}
        />
      </Col>
      <Col span={3}>
        <Select
          value={filterStore.colorFilter}
          className="w-full"
          placeholder="Phone's color"
          options={filterStore.colorOptions}
          onChange={(e) => filterStore.setColorFilter(e)}
        />
      </Col>
      <Col span={3}>
        <div className="flex justify-start items-center space-x-2">
          <Button
            icon={<DeleteOutlined />}
            className="!bg-[#ad9d6f] !text-white"
            onClick={() => filterStore.resetFilter()}
          />
        </div>
      </Col>
    </Row>
  );
}
