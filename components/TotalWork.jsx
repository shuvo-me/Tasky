import { splineAreaChart } from "@/assets/data/chart";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const TotalWork = () => {
  const chartData = splineAreaChart;
  return (
    <div className=" shadow-lg rounded-md p-3">
      <div>
        <h3 className="title-medium">Total Work</h3>
      </div>
      <div>
        {typeof window !== "undefined" && (
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height={350}
          />
        )}
      </div>
    </div>
  );
};

export default TotalWork;
