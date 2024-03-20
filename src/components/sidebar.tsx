import { cn } from "@/lib/cn";
import { CrossIcon, Layout } from "lucide-react";
import { useEffect, useState } from "react";
import { LayoutHeader } from "./custom/layouts";
import { Button } from "./ui/button";
import {
  CaretLeftIcon,
  DashboardIcon,
  DoubleArrowLeftIcon,
} from "@radix-ui/react-icons";
import Navbar, { SideLink } from "./navbar";

// eslint-disable-next-line react-refresh/only-export-components
export const sidelinks: SideLink[] = [
  {
    title: "Dashboard",
    label: "",
    href: "/",
    icon: <DashboardIcon height={18} />,
  },
  {
    title: "Tasks",
    label: "3",
    href: "/tasks",
    icon: <DashboardIcon height={18} />,
  },
  {
    title: "Chats",
    label: "9",
    href: "/chats",
    icon: <DashboardIcon height={18} />,
  },
  {
    title: "Authentication",
    label: "",
    href: "",
    icon: <DashboardIcon height={18} />,
    sub: [
      {
        title: "Sign In (email + password)",
        label: "",
        href: "/sign-in",
        icon: <DashboardIcon height={18} />,
      },
      {
        title: "Sign In (Box)",
        label: "",
        href: "/sign-in-2",
        icon: <DashboardIcon height={18} />,
      },
      {
        title: "Sign Up",
        label: "",
        href: "/sign-up",
        icon: <DashboardIcon height={18} />,
      },
      {
        title: "Forgot Password",
        label: "",
        href: "/forgot-password",
        icon: <DashboardIcon height={18} />,
      },
    ],
  },
  {
    title: "Users",
    label: "",
    href: "/users",
    icon: <DashboardIcon height={18} />,
  },
  {
    title: "Requests",
    label: "10",
    href: "/requests",
    icon: <DashboardIcon height={18} />,
    sub: [
      {
        title: "Trucks",
        label: "9",
        href: "/trucks",
        icon: <DashboardIcon height={18} />,
      },
      {
        title: "Cargos",
        label: "",
        href: "/cargos",
        icon: <DashboardIcon height={18} />,
      },
    ],
  },
  {
    title: "Analysis",
    label: "",
    href: "/analysis",
    icon: <DashboardIcon height={18} />,
  },
  {
    title: "Extra Components",
    label: "",
    href: "/extra-components",
    icon: <DashboardIcon height={18} />,
  },
  {
    title: "Error Pages",
    label: "",
    href: "",
    icon: <DashboardIcon height={18} />,
    sub: [
      {
        title: "Not Found",
        label: "",
        href: "/404",
        icon: <DashboardIcon height={18} />,
      },
      {
        title: "Internal Server Error",
        label: "",
        href: "/500",
        icon: <DashboardIcon height={18} />,
      },
      {
        title: "Maintenance Error",
        label: "",
        href: "/503",
        icon: <DashboardIcon height={18} />,
      },
    ],
  },
  {
    title: "Settings",
    label: "",
    href: "/settings",
    icon: <DashboardIcon height={18} />,
  },
];

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  isCollapsed: boolean;
  setIsCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ className, isCollapsed, setIsCollapsed }: SidebarProps) => {
  const [navOpened, setNavOpened] = useState<boolean>(false);

  console.log(
    navOpened,
    setIsCollapsed?.((prev) => prev)
  );
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
          `fixed left-0 right-0 top-0 z-50 w-full border-r-2-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${
            isCollapsed ? "md:w-14" : "md:w-64"
          }`,
          className
        )}
      >
        <div
          onClick={() => setNavOpened(false)}
          className={`absolute inset-0 transition-[opacity] delay-100 duration-800 ${
            navOpened ? "h-svh opacity-50" : "h-0 opacity-0"
          } w-full bg-black md:hidden`}
        >
          <Layout>
            <LayoutHeader className="'sticky top-0 justify-between px-4 py-3 shadow md:px-4">
              <div
                className={`flex items-center ${!isCollapsed ? "gap-2" : ""}`}
              >
                <svg
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
                  <span className="sr-only">Website Name</span>
                </svg>
                <div
                  className={`flex flex-col justify-end truncate ${
                    isCollapsed ? "invisible w-0" : "visible w-auto"
                  }`}
                >
                  <span className="font-medium">Shadcn Admin</span>
                  <span className="text-xs">Vite + ShadcnUI</span>
                </div>
              </div>

              <Button
                variant={"ghost"}
                size={"icon"}
                className="md:hidden"
                aria-label="Toggle Navigation"
                aria-controls="sidebar-menu"
                aria-expanded={navOpened}
                onClick={() => setNavOpened((prev) => !prev)}
              >
                {navOpened ? <CrossIcon /> : <DoubleArrowLeftIcon />}
              </Button>
            </LayoutHeader>

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
            >
              <CaretLeftIcon
                stroke={"1.5"}
                className={`h-5 w-5 ${isCollapsed ? "rotate-180" : ""}`}
              />
            </Button>
          </Layout>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
