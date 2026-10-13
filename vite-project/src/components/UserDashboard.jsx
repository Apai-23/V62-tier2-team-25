import { DashBoardData } from "./DashBoardData";
import DASHBOARD_DATA from "../data/mockDashboardData";

export const UserDashBoard = () => {
  return (
    <div className="container mx-auto px-1 md:px-1 2xl:max-w-[1400px] py-12 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {/* mapping through the data */}
          {DASHBOARD_DATA.map((data) => (
            <DashBoardData key={DASHBOARD_DATA.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
