import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostDetailsPage from "./Pages/PostDetailsPage.jsx";
import Profile from "./Pages/Profile.jsx";
import Jobs from "./Pages/Jobs.jsx";
import JobDetails from "./Pages/JobDetails.jsx";

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
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/job-details",
    element: <JobDetails />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
