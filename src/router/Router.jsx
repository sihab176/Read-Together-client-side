import { createBrowserRouter } from "react-router";
import RootLayout from "../components/layout/RootLayout/RootLayout";
import HomePage from "../Pages/HomePages/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import AddBookForm from "../components/AddBookForm";
import BookDetailsPage from "../Pages/BookDetailsPage.jsx/BookDetailsPage";
import CheckoutPage from "../components/CheckoutPage";
import PaymentSuccess from "../components/PaymentSuccess";
import MyOrders from "../Pages/DashBoard/MyOrders";
import PaymentHistoryPage from "../Pages/DashBoard/PaymentHistoryPage";
import WishlistPage from "../Pages/DashBoard/WishlistPage";
import ProfilePage from "../Pages/DashBoard/ProfilePage";
import HelpSupport from "../Pages/HelpSupport/HelpSupport";

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
      { path: "checkout/:id", Component: CheckoutPage },
      { path: "success", Component: PaymentSuccess },
      { path: "/login", Component: LoginPage },
      { path: "/register", Component: RegisterPage },
      { path: "/help-support", Component: HelpSupport },
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
      {
        path: "my-orders",
        Component: MyOrders,
      },
      {
        path: "payment-history",
        Component: PaymentHistoryPage,
      },
      {
        path: "wishlist",
        Component: WishlistPage,
      },
      {
        path: "profile",
        Component: ProfilePage,
      },
    ],
  },
]);
