import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AppWrapperLayout from "../layouts/AppWrapperLayout";
import DashboardPage from "../pages/DashboardPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import SuccessfullPage from "../pages/SuccessfullPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapperLayout />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
        ],
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "successfull",
        element: <SuccessfullPage />,
      },
    ],
  },
]);
