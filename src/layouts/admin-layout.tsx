import Sidebar from "@/components/sidebar";
import { Outlet } from "react-router-dom";
import useIsCollaped from "src/hooks/use-is-collapsed";

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useIsCollaped();
  return (
    <>
      <div className="relative h-full  bg-background">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />{" "}
        <div
          id="content"
          className={`pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${
            isCollapsed ? "md:ml-14" : "md:ml-72"
          } h-full`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default AdminLayout;
