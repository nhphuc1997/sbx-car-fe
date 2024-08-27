import { useLangStore } from "@/stores/lang.store";
import { Descriptions, Typography } from "antd";

interface Props {
  dataInfor: Record<string, any>;
}

export default function TabAll({ dataInfor }: Props) {
  const langStore = useLangStore((state: any) => state);

  return (
    <div>
      <div className="flex justify-start items-center">
        <div>
          <Typography.Text className="font-thin mr-2">
            {langStore.lang.auctionViews}
          </Typography.Text>
          <Typography.Text className="font-semibold">
            {dataInfor?.auctionViews}
          </Typography.Text>
        </div>

        <div className="mx-2">
          <Typography.Text className="font-thin mr-2">
            {langStore.lang.watching}
          </Typography.Text>
          <Typography.Text className="font-semibold">
            {dataInfor?.watching}
          </Typography.Text>
        </div>
      </div>

      <div className="py-4">
        <Typography.Title level={4}>
          {langStore.lang.highlights}
        </Typography.Title>
        <ul className="!list-disc px-3">
          <li>Hyperion 'Final Design Master' prototype vehicle</li>
          <li>Drivable show car with fully-functioning features</li>
          <li>
            Finished in Satin Titanium Silver with Sky Blue, Space Black, and
            carbon-fiber accents
          </li>
          <li>
            Auction winner receives exclusive invitation to customize/own a
            limited-edition version of the XP-1 hypercar
          </li>
        </ul>
      </div>

      <div className="py-4">
        <Typography.Title level={4}>
          {langStore.lang.technicalData}
        </Typography.Title>
        <div className="p-4 bg-[#EAEAEA] w-40">
          <Typography.Text className="font-thin mr-2">
            {langStore.lang.vin}:
          </Typography.Text>
          <Typography.Text className="font-semibold">XP/12</Typography.Text>
        </div>
      </div>

      <div className="py-4">
        <Descriptions title="">
          <Descriptions.Item label="Seller">
            <Typography.Text className="font-semibold">
              {dataInfor?.seller}
            </Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item label="Seller Type">
            <Typography.Text className="font-semibold">
              {dataInfor?.sellerType}
            </Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item label="Exterior">
            <Typography.Text className="font-semibold">
              {dataInfor?.exteriorName}
            </Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item label="Interior">
            <Typography.Text className="font-semibold">
              {dataInfor?.interiorName}
            </Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item label="Lot#">
            <Typography.Text className="font-semibold">
              {dataInfor?.lot}
            </Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item label="Location">
            <Typography.Text className="font-semibold">
              {dataInfor?.location}
            </Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item label="Vehicle Make / Model">
            <Typography.Text className="font-semibold">
              {dataInfor?.vehicleMake}
            </Typography.Text>
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div className="py-4">
        <Typography.Title level={4}>
          {langStore.lang.description}
        </Typography.Title>
        <div
          className="p-4 bg-[#EAEAEA]"
          dangerouslySetInnerHTML={{ __html: dataInfor?.description }}
        />
      </div>
    </div>
  );
}
