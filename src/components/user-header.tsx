import { useLocation } from "react-router-dom";
import ModeToggle from "./mode-toggle";
import TopNav from "./top-nav";
import UserNav from "./user-nav";

const topNav = [
  {
    title: "Overview",
    href: "dashboard/overview",
    isActive: true,
  },
  {
    title: "Customers",
    href: "dashboard/customers",
    isActive: false,
  },
  {
    title: "Products",
    href: "dashboard/products",
    isActive: false,
  },
  {
    title: "Settings",
    href: "dashboard/settings",
    isActive: false,
  },
];
const UserHeader = ({ headerName }: { headerName?: string }) => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname.includes("admin-dashboard") && <TopNav links={topNav} />}
      {!pathname.includes("admin-dashboard") && (
        <p className="font-bold text-sm md:text-2xl">{headerName}</p>
      )}
      <div className="ml-auto flex items-center space-x-2">
        <ModeToggle />
        <UserNav />
      </div>
    </>
  );
};
export default UserHeader;
