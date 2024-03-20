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
const UserHeader = () => {
  return (
    <>
      <TopNav links={topNav} />
      <div className="ml-auto flex items-center space-x-2">
        <ModeToggle />
        <UserNav />
      </div>
    </>
  );
};
export default UserHeader;
