import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AppWrapperLayout from "../layouts/AppWrapperLayout";
import DashboardPage from "../pages/DashboardPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import SuccessfullPage from "../pages/SuccessfullPage";
import ProtectedRouteComponent from "../components/ProtectedRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapperLayout />,
    children: [
      {
        element: (
          <ProtectedRouteComponent>
            <RootLayout />
          </ProtectedRouteComponent>
        ),
        children: [
          {
            index: true,
            // element: <DashboardPage />,
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
