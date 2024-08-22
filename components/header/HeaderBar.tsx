import BrandBar from "./BrandBar";
import MainBar from "./MainBar";
import TopBar from "./TopBar";

export default function HeaderBar() {
  return (
    <header>
      <TopBar />
      <MainBar />
      <BrandBar />
    </header>
  );
}
