import { createBrowserRouter } from "react-router";
import RootLayout from "../components/layout/RootLayout/RootLayout";
import HomePage from "../Pages/HomePages/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import AddBookForm from "../components/AddBookForm";
import BookDetailsPage from "../Pages/BookDetailsPage.jsx/BookDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      { path: "bookDetails/:id", Component: BookDetailsPage },
      { path: "/login", Component: LoginPage },
      { path: "/register", Component: RegisterPage },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: AddBookForm,
      },
    ],
  },
]);
