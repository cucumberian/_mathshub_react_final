import "./App.css";
import CategoryPage from "./pages/CategoryPage";

import HomePage from "./pages/HomePage";

import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import TemplatePage from "./pages/TemplatePage";

import { v4 as uuidv4 } from "uuid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TemplatePage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "category/:categoryId", element: <CategoryPage /> },
    ],
  },
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
