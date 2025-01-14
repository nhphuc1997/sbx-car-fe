"use client";
import Phones from "@/components/contents/Phones";
import FilterPhone from "@/components/phone/FilterPhone";
import { useLangStore } from "@/stores/lang.store";
import { Divider, Typography } from "antd";

export default function ProductIndexPage() {
  const langStore = useLangStore((state: any) => state);

  return (
    <div>
      <div>
        <Typography.Title level={5}>{langStore.lang.filter}:</Typography.Title>
        <FilterPhone />
      </div>

      <div className="py-4">
        <Typography.Title level={5}>
          {langStore.lang.phones}:
        </Typography.Title>
        <Phones />
      </div>

      <Divider />
    </div>
  );
}
