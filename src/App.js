import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DrugDetails from "./components/DrugDetails";
import HomePage from "./HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: ":drugName", element: <DrugDetails /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
