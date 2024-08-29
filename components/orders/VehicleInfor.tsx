import { useCarStore } from "@/stores/car.store";
import { Descriptions, Typography } from "antd";

export default function VehicleInfor() {
  const carStore = useCarStore((state: any) => state);

  return (
    <div className="py-4">
      <Descriptions column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}>
        <Descriptions.Item label="Vehicle name">
          <Typography.Text className="text-sm font-semibold">
            {carStore.car?.subTitle}
          </Typography.Text>
          <Typography.Text className="text-sm font-semibold">
            {carStore.car?.shortTitle}
          </Typography.Text>
        </Descriptions.Item>
        <Descriptions.Item label="Color">
          <Typography.Text className="text-sm font-semibold">
            {carStore.car?.color}
          </Typography.Text>
        </Descriptions.Item>
        <Descriptions.Item label="Interior name">
          <Typography.Text className="text-sm font-semibold">
            {carStore.car?.interiorName || "-"}
          </Typography.Text>
        </Descriptions.Item>
        <Descriptions.Item label="Exterior name">
          <Typography.Text className="text-sm font-semibold">
            {carStore.car?.exteriorName || "-"}
          </Typography.Text>
        </Descriptions.Item>
        <Descriptions.Item label="Manufacture year">
          <Typography.Text className="text-sm font-semibold">
            {carStore.car?.manufactureYear}
          </Typography.Text>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
