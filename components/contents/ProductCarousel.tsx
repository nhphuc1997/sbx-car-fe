"use client";
import { S3_URL } from "@/utils/aws";
import { doGet } from "@/utils/doMethod";
import { useQuery } from "@tanstack/react-query";
import { Carousel } from "antd";
import { log } from "console";
import { map } from "lodash";

export default function ProductCarousel() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-product-banner"],
    queryFn: async () => await doGet("/banners"),
  });

  console.log(data, "data");

  if (isLoading) {
    return (
      <div className="h-[150px] md:h-[450px]">
        <div className="bg-slate-100 h-full" />
      </div>
    );
  }

  return (
    <Carousel arrows autoplay>
      {map(data?.data, (element, index) => (
        <div className="h-[150px] md:h-[450px]" key={index}>
          <div
            className="bg-center bg-cover bg-no-repeat bg-slate-100 h-full"
            style={{
              backgroundImage: `url(${S3_URL}/${element?.s3Key})`,
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}
