import "./App.css";
import CategoryPage from "./pages/CategoryPage";

import HomePage from "./pages/HomePage";

import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import TemplatePage from "./pages/TemplatePage";

import { v4 as uuidv4 } from "uuid";
import Statistics from "./pages/Statistics";
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
      { path: "statistics", element: <Statistics /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  { path: "/404", element: <Page404 /> },
]);

function App() {
  const userId = localStorage.getItem("userId");

  if (userId === null) {
    const uuid = uuidv4();
    localStorage.setItem("userId", uuid);
  }

  return <RouterProvider router={router} />;
}

export default App;
