import { Carousel, Image } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function ProductCarousel() {
  return (
    <Carousel>
      <div className="h-[150px] md:h-[450px]">
        <div
          className="bg-center bg-cover bg-no-repeat bg-slate-100 h-full"
          style={{
            backgroundImage: `url(https://i.sbxcars.com/cdn-cgi/image/width=3000,height=3000,quality=80/auctions/2a6a19d4-2013-4186-ae47-72d981eafda5/LM002%20-%20cover%20-%20black%20plate.jpg)`,
          }}
        />
      </div>
    </Carousel>
  );
}
