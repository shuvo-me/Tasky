import { colNegetiveValuesChart } from "@/assets/data/chart";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const LastMonth = () => {
  const chartData = colNegetiveValuesChart;
  return (
    <div className="shadow-lg rounded-md p-3">
      <div>
        <h3 className="title-medium">Last Month</h3>
      </div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default LastMonth;
