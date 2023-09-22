import "./App.css";
import CategoryPage from "./pages/CategoryPage";

import HomePage from "./pages/HomePage";

import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import TemplatePage from "./pages/TemplatePage";

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
  return <RouterProvider router={router} />;
}

export default App;
