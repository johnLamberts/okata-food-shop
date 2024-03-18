import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </>
  );
};
export default HomeLayout;
