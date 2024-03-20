import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <PageHeader />

      <main className="px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
        <Outlet />
      </main>
      <PageFooter />
    </>
  );
};
export default HomeLayout;
