import GeneralError from "@/modules/error-pages/general-error";
import NotFoundError from "@/modules/error-pages/not-found-error";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/admin-dashboard",
    lazy: async () => {
      const AppShell = await import("@/layouts/admin-layout");
      return { Component: AppShell.default };
    },
    errorElement: <GeneralError />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("@/modules/admin-dashboard/admin-dashboard"))
            .default,
        }),
      },
    ],
  },
  { path: "/500", Component: GeneralError },
  { path: "*", Component: NotFoundError },
]);

export default router;
