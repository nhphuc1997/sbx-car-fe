import { useLangStore } from "@/stores/lang.store";
import { formatCurrency } from "@/utils/format-currency";
import { formatDate } from "@/utils/format-date";
import { Divider, Skeleton, Typography } from "antd";

interface Props {
  dataInfor?: Record<string, any>;
  isLoading?: boolean;
}

export default function ProductInfor({ dataInfor, isLoading }: Props) {
  const langStore = useLangStore((state: any) => state);

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
          {dataInfor?.manufactureYear}
        </Typography.Text>
        <Typography.Text className="font-semibold !text-lg md:!text-2xl mr-2">
          {dataInfor?.subTitle}
        </Typography.Text>
        <Typography.Text className="font-thin !text-lg md:!text-2xl mr-2">
          {dataInfor?.shortTitle}
        </Typography.Text>
      </div>

      <div className="py-2">
        <Typography.Text className="font-semibold !text-lg md:!text-2xl">
          {formatCurrency(dataInfor?.price, localStorage.getItem("lang"))}
        </Typography.Text>

        <Divider type="vertical" className="!bg-black" />

        <Typography.Text className="font-thin !text-lg md:!text-2xl">
          {langStore.lang.date}:{" "}
          {formatDate(dataInfor?.createAt, localStorage.getItem("lang"))}
        </Typography.Text>
      </div>
    </div>
  );
}
