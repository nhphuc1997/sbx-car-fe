"use client";
import { doGet } from "@/utils/doMethod";
import { useQuery } from "@tanstack/react-query";
import { Skeleton, Typography } from "antd";
import { map } from "lodash";

export default function BrandBar() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-brand"],
    queryFn: async () => {
      return await doGet("/categories");
    },
  });

  console.log(data);

  if (isLoading) {
    return (
      <div className="px-3 md:px-10 py-4">
        <div className="flex justify-center items-center">
          <Skeleton.Input className="!w-full !h-6" active={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="px-3 md:px-10 py-4">
      <div className="flex justify-center items-center space-x-8">
        {map(data?.data, (element, index: number) => (
          <Typography.Text
            key={index}
            className="text-base font-normal cursor-pointer"
          >
            {element?.name}
          </Typography.Text>
        ))}
      </div>
    </div>
  );
}
