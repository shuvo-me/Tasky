import { lastWeekChart } from "@/assets/data/chart";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const LastWeek = () => {
  let chartData = lastWeekChart;
  console.log(chartData);
  return (
    <div className=" shadow-lg rounded-md p-3">
      <div>
        <h3 className="title-medium">Last Week</h3>
      </div>
      <div>
        {typeof window !== "undefined" && (
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={350}
          />
        )}
      </div>
    </div>
  );
};

export default LastWeek;
