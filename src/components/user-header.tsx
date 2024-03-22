import ModeToggle from "./mode-toggle";
import UserNav from "./user-nav";

// const topNav = [
//   {
//     title: "Overview",
//     href: "dashboard/overview",
//     isActive: true,
//   },
//   {
//     title: "Customers",
//     href: "dashboard/customers",
//     isActive: false,
//   },
//   {
//     title: "Products",
//     href: "dashboard/products",
//     isActive: false,
//   },
//   {
//     title: "Settings",
//     href: "dashboard/settings",
//     isActive: false,
//   },
// ];
const UserHeader = ({ headerName }: { headerName?: string }) => {
  return (
    <>
      {/* {pathname.includes("admin-dashboard") && <TopNav links={topNav} />} */}

      {/* {!pathname.includes("admin-dashboard") && (
        )} */}
      <p className="font-bold text-sm md:text-1xl">{headerName}</p>
      <div className="ml-auto flex items-center space-x-2">
        <ModeToggle />
        <UserNav />
      </div>
    </>
  );
};
export default UserHeader;
