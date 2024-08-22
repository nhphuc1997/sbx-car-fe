import { Descriptions, Typography } from "antd";

export default function TabAll() {
  return (
    <div>
      <div className="flex justify-start items-center">
        <div>
          <Typography.Text className="font-thin mr-2">
            Auction views
          </Typography.Text>
          <Typography.Text className="font-semibold">28.79K</Typography.Text>
        </div>

        <div className="mx-2">
          <Typography.Text className="font-thin mr-2">Watching</Typography.Text>
          <Typography.Text className="font-semibold">118</Typography.Text>
        </div>
      </div>

      <div className="py-4">
        <Typography.Title level={4}>Highlights</Typography.Title>
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
        <Typography.Title level={4}>Technical Data</Typography.Title>
        <div className="p-4 bg-[#EAEAEA] w-40">
          <Typography.Text className="font-thin mr-2">VIN:</Typography.Text>
          <Typography.Text className="font-semibold">XP/12</Typography.Text>
        </div>
      </div>

      <div className="py-4">
        <Descriptions title="">
          <Descriptions.Item label="Seller">
            <Typography.Text className="font-semibold">1</Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item label="Seller Type">
            <Typography.Text className="font-semibold">1</Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item label="Exterior">
            <Typography.Text className="font-semibold">1</Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item label="Interior">
            <Typography.Text className="font-semibold">1</Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item label="Lot#">
            <Typography.Text className="font-semibold">1</Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item label="Location">
            <Typography.Text className="font-semibold">1</Typography.Text>
          </Descriptions.Item>
          <Descriptions.Item label="Vehicle Make / Model">
            <Typography.Text className="font-semibold">1</Typography.Text>
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div className="py-4">
        <Typography.Title level={4}>Description</Typography.Title>
        <div
          className="p-4 bg-[#EAEAEA]"
          dangerouslySetInnerHTML={{ __html: "<p>aaa</p>" }}
        ></div>
      </div>
    </div>
  );
}
