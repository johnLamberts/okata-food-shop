import HomeNav from "./home-nav";

const PageHeader = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/90 sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur mb-4 px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
      <div className="flex h-14 items-center">
        <HomeNav />

        <div className="flex flex-1 items-center space-x-2 justify-end">
          <div className="flex-none">search</div>
          <div>cart</div>
          toggle
        </div>
      </div>
    </header>
  );
};
export default PageHeader;
