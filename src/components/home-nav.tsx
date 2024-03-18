import { cn } from "@/lib/cn";
import { Link, useLocation } from "react-router-dom";

const HomeNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const { pathname } = useLocation();

  const routes = [
    {
      href: `/banners`,
      label: "Banners",
      active: pathname.includes(`/banners`),
    },
    {
      href: `/categories`,
      label: "Categories",
      active: pathname.includes(`/categories`),
    },
    {
      href: `/products`,
      label: "Products",
      active: pathname.includes(`/products`),
    },
    {
      href: `/orders`,
      label: "Orders",
      active: pathname.includes(`/orders`),
    },
    {
      href: `/payments`,
      label: "Payments",
      active: pathname.includes(`/payments`),
    },
    {
      href: `/users`,
      label: "Users",
      active: pathname.includes(`/users`),
    },
    {
      href: `/codes`,
      label: "Codes",
      active: pathname.includes(`/codes`),
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          to={route.href}
          className={cn(
            "text-sm transition-colors hover:text-primary",
            route.active ? "font-semibold" : "font-light text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
export default HomeNav;
