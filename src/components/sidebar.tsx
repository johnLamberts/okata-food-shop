import { cn } from "@/lib/cn";
import { CrossIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { LayoutHeader, Layout } from "./custom/layouts";
import { Button } from "./ui/button";
import {
  BackpackIcon,
  CaretLeftIcon,
  Cross1Icon,
  DashboardIcon,
  DoubleArrowLeftIcon,
  FileTextIcon,
  GearIcon,
  HamburgerMenuIcon,
  IdCardIcon,
  PersonIcon,
  RotateCounterClockwiseIcon,
} from "@radix-ui/react-icons";
import Navbar, { SideLink } from "./navbar";

// eslint-disable-next-line react-refresh/only-export-components
export const sidelinks: SideLink[] = [
  {
    title: "Admin Dashboard",
    label: "",
    href: "/admin-dashboard",
    icon: <DashboardIcon height={18} />,
  },
  {
    title: "Product Management",
    label: "3",
    href: "/product-mgm",
    icon: <BackpackIcon height={18} />,
  },
  {
    title: "User Management",
    label: "9",
    href: "/user-mgm",
    icon: <PersonIcon height={18} />,
  },
  {
    title: "Customer Management",
    label: "9",
    href: "/customer-mgm",
    icon: <PersonIcon height={18} />,
  },
  {
    title: "Transaction",
    label: "",
    href: "/transaction",
    icon: <IdCardIcon height={18} />,
    sub: [
      {
        title: "Place order",
        label: "",
        href: "/sign-in",
        icon: <DashboardIcon height={18} />,
      },
      {
        title: "Point of Sale",
        label: "",
        href: "/sign-in-2",
        icon: <DashboardIcon height={18} />,
      },
      {
        title: "Transaction List",
        label: "",
        href: "/forgot-password",
        icon: <DashboardIcon height={18} />,
      },
    ],
  },
  {
    title: "Reports",
    label: "10",
    href: "/requests",
    icon: <FileTextIcon height={18} />,
    sub: [
      {
        title: "Sales Report",
        label: "9",
        href: "/trucks",
        icon: <DashboardIcon height={18} />,
      },
      {
        title: "Inventory Report",
        label: "",
        href: "/cargos",
        icon: <DashboardIcon height={18} />,
      },
      {
        title: "Customer Report",
        label: "",
        href: "/cargos",
        icon: <DashboardIcon height={18} />,
      },
      {
        title: "Stock Report",
        label: "",
        href: "/cargos",
        icon: <DashboardIcon height={18} />,
      },
      {
        title: "Audit Trail",
        label: "",
        href: "/cargos",
        icon: <DashboardIcon height={18} />,
      },
    ],
  },
  {
    title: "Settings",
    label: "",
    href: "/settings",
    icon: <GearIcon height={18} />,
    sub: [
      {
        title: "Category",
        label: "9",
        href: "/trucks",
        icon: <DashboardIcon height={18} />,
      },
      {
        title: "User Role",
        label: "9",
        href: "/trucks",
        icon: <RotateCounterClockwiseIcon height={18} />,
      },
    ],
  },
];

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  isCollapsed: boolean;
  setIsCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ className, isCollapsed, setIsCollapsed }: SidebarProps) => {
  const [navOpened, setNavOpened] = useState<boolean>(false);

  useEffect(() => {
    const body = document.body.classList;

    if (navOpened) {
      body.add("overflow-hidden");
    } else {
      body.remove("overflow-hidden");
    }
  }, [navOpened]);
  return (
    <>
      <aside
        className={cn(
          `fixed left-0 right-0 top-0 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${
            isCollapsed ? "md:w-14" : "md:w-72"
          }`,
          className
        )}
      >
        {/* Overlay in mobile */}
        <div
          onClick={() => setNavOpened(false)}
          className={`absolute inset-0 transition-[opacity] delay-100 duration-700 ${
            navOpened ? "h-svh opacity-50" : "h-0 opacity-0"
          } w-full bg-black md:hidden`}
        />

        <Layout>
          {/* Header */}
          <LayoutHeader className="sticky top-0 justify-between px-4 py-3 shadow md:px-4">
            <div className={`flex items-center ${!isCollapsed ? "gap-2" : ""}`}>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className={`transition-all ${
                  isCollapsed ? "h-6 w-6" : "h-8 w-8"
                }`}
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <span className="sr-only">Code-Okata Shop</span>
              </svg> */}
              <svg
                id="logo-16"
                className={`transition-all ${
                  isCollapsed ? "h-6 w-6" : "h-8 w-8"
                }`}
                viewBox="0 0 109 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z"
                  className="ccompli1"
                  fill="#FFD200"
                ></path>{" "}
                <path
                  d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z"
                  className="ccompli2"
                  fill="#06E07F"
                ></path>{" "}
                <path
                  d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z"
                  className="ccustom"
                  fill="#E3073C"
                ></path>{" "}
                <path
                  d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z"
                  className="ccustom"
                  fill="#1F84EF"
                ></path>{" "}
              </svg>
              <div
                className={`flex flex-col justify-end truncate ${
                  isCollapsed ? "invisible w-0" : "visible w-auto"
                }`}
              >
                <span className="font-medium">Code-Okata</span>
                <span className="text-xs">Food Shop</span>
              </div>
            </div>

            {/* Toggle Button in mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle Navigation"
              aria-controls="sidebar-menu"
              aria-expanded={navOpened}
              onClick={() => setNavOpened((prev) => !prev)}
            >
              {navOpened ? <Cross1Icon /> : <HamburgerMenuIcon />}
            </Button>
          </LayoutHeader>

          {/* Navigation links */}
          <Navbar
            id="sidebar-menu"
            className={`h-full flex-1 overflow-auto ${
              navOpened
                ? "max-h-screen"
                : "max-h-0 py-0 md:max-h-screen md:py-2"
            }`}
            closeNav={() => setNavOpened(false)}
            isCollapsed={isCollapsed}
            links={sidelinks}
          />

          {/* Scrollbar width toggle button */}
          <Button
            onClick={() => setIsCollapsed?.((prev) => !prev)}
            size="icon"
            variant="outline"
            className="absolute -right-5 top-1/2 hidden rounded-full md:inline-flex"
            style={{
              height: "2rem",
              width: "2rem",
            }}
          >
            <DoubleArrowLeftIcon
              className={`h-3 w-3 ${isCollapsed ? "rotate-180" : ""}`}
            />
          </Button>
        </Layout>
      </aside>
    </>
  );
};
export default Sidebar;
