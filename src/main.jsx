import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostDetailsPage from "./Pages/PostDetailsPage.jsx";
import Header from "./shareable/Header.jsx";
import BottomTab from "./shareable/BottomTab.jsx";
import Profile from "./Pages/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/post",
    element: <PostDetailsPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <div className="w-full min-h-screen bg-muted ">
      <RouterProvider router={router}></RouterProvider>
    </div>
    <BottomTab />
  </React.StrictMode>
);
