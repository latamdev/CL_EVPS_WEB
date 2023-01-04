import { TabData } from "./Interfaces";
import { TABS_DATA } from "./TabsStubs";

type TabsProps = {
  changeImage: (image: string) => void;
};

function VerticalTabs(props: TabsProps) {
  const { changeImage } = props;

  return (
    <div className="container flex-col">
      {TABS_DATA.map((data: TabData) => (
        <div
          key={data.title}
          onClick={() => changeImage(data.image)}
          className="rounded-md hover:backdrop-brightness-125 hover:bg-white/10 p-8 hover:cursor-pointer"
        >
          <h1 className="text-xl font-semibold">{data.title}</h1>
          <p className="text-sm">{data.description}</p>
        </div>
      ))}
    </div>
  );
}

export default VerticalTabs;
