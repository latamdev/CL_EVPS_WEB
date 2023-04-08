import { TabData } from "./Interfaces";

type TabsProps = {
  changeImage: (image: string) => void;
  data: TabData;
  active: boolean;
};

function VerticalTabs(props: TabsProps) {
  const { changeImage, data, active } = props;

  return (
    <div className="container flex-col">
      <div
        key={data.title}
        onClick={() => changeImage(data.image)}
        className={
          "rounded-md " +
          (active
            ? "backdrop-brightness-125 bg-white/10 "
            : "hover:backdrop-brightness-100 hover:bg-white/10") +
          "  p-8 hover:cursor-pointer"
        }
      >
        <h1 className="text-xl font-semibold">{data.title}</h1>
        <p className="text-sm mt-2 text-justify">{data.description}</p>
      </div>
    </div>
  );
}

export default VerticalTabs;
