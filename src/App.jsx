import "./App.css";
import CategoryPage from "./pages/CategoryPage";

import HomePage from "./pages/HomePage";

import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import TemplatePage from "./pages/TemplatePage";

import StatisticsPage from "./pages/StatisticsPage";
import Page404 from "./pages/Page404";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import "./firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TemplatePage />,
    errorElement: <Page404 />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "category/:categoryId", element: <CategoryPage /> },
      { path: "statistics", element: <StatisticsPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  { path: "/404", element: <Page404 /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
