import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const VideoStatistics = () => {
  const data = [
    { name: "mon", hr: 0 },
    { name: "tue", hr: 1.5 },
    { name: "wed", hr: 2.5 },
    { name: "thu", hr: 1 },
    { name: "fri", hr: 4 },
    { name: "sat", hr: 3 },
    { name: "sun", hr: 2 },
  ];
  return (
    <div>
      <p className="font-face-bb">Your statistics</p>
      <hr></hr>
      <div className="flex flex-row justify-between mt-3 mb-5">
        <p className="font-face-bb mt-3">Hours of study</p>
        <select className="rounded-md font-face-bb">
          <option selected value="week1">
            Week 1
          </option>
          <option value="week2">Week 2</option>
          <option value="week3">Week 3</option>
          <option value="week4">Week 4</option>
        </select>
      </div>
      <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="gray" />
        <Line type="monotone" dataKey="hr" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </div>
  );
};

export default VideoStatistics;
