import LastMonth from "@/components/LastMonth";
import LastWeek from "@/components/LastWeek";
import TotalWork from "@/components/TotalWork";
const analytic = () => {
  return (
    <div>
      <div className="row-1">
        <div className="transaction-report grid grid-cols-3 gap-8 sm:grid-cols-1 md:grid-cols-2">
          <TotalWork />
          <LastMonth />
          <LastWeek />
        </div>
      </div>
    </div>
  );
};

export default analytic;
