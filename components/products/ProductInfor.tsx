import { formatCurrency } from "@/utils/format-currency";
import { Skeleton, Typography } from "antd";

interface Props {
  dataInfor?: Record<string, any>;
  isLoading?: boolean;
}

export default function ProductInfor({ dataInfor, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="flex flex-col space-y-3 w-full">
        <Skeleton.Button active={true} className="!w-1/2" />
        <Skeleton.Button active={true} className="!w-1/2" />
      </div>
    );
  }

  return (
    <div>
      <div className="py-2">
        <Typography.Text className="font-thin !text-lg md:!text-2xl mr-2">
          {dataInfor?.name}
        </Typography.Text>
        <Typography.Text className="font-semibold !text-lg md:!text-2xl mr-2">
          {dataInfor?.categoryName}
        </Typography.Text>
      </div>

      <div className="py-2">
        <Typography.Text className="font-semibold !text-lg md:!text-2xl">
          {formatCurrency(dataInfor?.price, localStorage.getItem("lang"))}
        </Typography.Text>
      </div>
    </div>
  );
}
