import { doGet } from "@/utils/doMethod";
import { useQuery } from "@tanstack/react-query";
import { first } from "lodash";
import { useParams } from "next/navigation";

export default function TabVideo() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["get-video"],
    queryFn: async () => {
      const response = await doGet("/videos", {
        s: JSON.stringify({ carId: id }),
      });
      const videoUrl: any = first(response?.data);
      return videoUrl?.name;
    },
  });

  return (
    <div className="p-4 border">
      <iframe
        className="w-full aspect-video"
        src={data}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
}
