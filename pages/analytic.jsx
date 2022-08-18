import LastMonth from "@/components/LastMonth";
import LastWeek from "@/components/LastWeek";
import Productivity from "@/components/Productivity";
import TotalWork from "@/components/TotalWork";
const analytic = () => {
  return (
    <div>
      <div className="row-1">
        <div className="transaction-report grid grid-cols-3 gap-8  md:grid-cols-2 lg:grid-cols-2">
          <TotalWork />
          <LastMonth />
          <LastWeek />
          <Productivity />
        </div>
      </div>
    </div>
  );
};

export default analytic;
