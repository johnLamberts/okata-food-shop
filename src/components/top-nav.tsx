import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  links: {
    title: string;
    href: string;
    isActive: boolean;
  }[];
}

const TopNav = ({ className, links, ...props }: TopNavProps) => {
  return (
    <>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size={"icon"}>
              <HamburgerMenuIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="start">
            {links.map(({ title, href, isActive }) => (
              <DropdownMenuItem key={`${title}-${href}`} asChild>
                <Link
                  to={href}
                  className={!isActive ? "text-muted-foreground" : ""}
                >
                  {title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav
        className={cn(
          "hidden items-center space-x-4 md:flex lg:space-x-6",
          className
        )}
        {...props}
      >
        {links.map(({ title, href, isActive }) => (
          <Link
            key={`${title}-${href}`}
            to={href}
            className={!isActive ? "text-muted-foreground" : ""}
          >
            {title}
          </Link>
        ))}
      </nav>
    </>
  );
};
export default TopNav;
