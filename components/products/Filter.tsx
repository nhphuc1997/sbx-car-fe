import { useFilterStore } from "@/stores/filter.store";
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Input, Row, Select } from "antd";

export default function Filter() {
  const filterStore = useFilterStore((state: any) => state);

  return (
    <Row gutter={8}>
      <Col span={6}>
        <Input
          placeholder="Name vehicle"
          value={filterStore.nameVehicleFilter}
          onChange={(e) => filterStore.setNameVehicleFilter(e.target.value)}
        />
      </Col>
      <Col span={4}>
        <Select
          value={filterStore.categoryFilter}
          className="w-full"
          placeholder="Pick a brand"
          options={filterStore.categoryOptions}
          onChange={(e) => filterStore.setCategoryFilter(e)}
        />
      </Col>
      <Col span={3}>
        <Select
          value={filterStore.colorFilter}
          className="w-full"
          placeholder="Pick a color"
          options={filterStore.colorOptions}
          onChange={(e) => filterStore.setColorFilter(e)}
        />
      </Col>
      <Col span={3}>
        <DatePicker
          value={filterStore.yearFilter}
          className="w-full"
          picker="year"
          placeholder="Pick a year"
          onChange={(e) => filterStore.setYearFilter(e)}
        />
      </Col>
      <Col span={3}>
        <div className="flex justify-start items-center space-x-2">
          <Button
            icon={<SearchOutlined />}
            className="!border-[#ad9d6f] !text-black"
          />
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
