"use client";
import PhoneImage from "@/components/phone/PhoneImage";
import ProductImage from "@/components/products/ProductImage";
import ProductInfor from "@/components/products/ProductInfor";
import { usePhoneStore } from "@/stores/phone.store";
import { doGet } from "@/utils/doMethod";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();
  const phoneStore = usePhoneStore((state: any) => state);

  const { data, isLoading } = useQuery({
    queryKey: ["get-detail-phones", [id]],
    queryFn: async () => {
      const response = await doGet(`/phones/${id}`);
      phoneStore.setPhone(response?.data);
      return response;
    },
  });

  return (
    <div className="py-4">
      <ProductInfor dataInfor={data?.data} isLoading={isLoading} />
      <PhoneImage dataInfor={data?.data} />
    </div>
  );
}
