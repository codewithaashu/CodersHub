import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostDetailsPage from "./Pages/PostDetailsPage.jsx";
import Profile from "./Pages/Profile.jsx";
import Jobs from "./Pages/Jobs.jsx";
import JobDetails from "./Pages/JobDetails.jsx";
import Coding from "./Pages/Coding.jsx";
import DSASheet from "./Pages/DSASheet.jsx";
import Notes from "./Pages/Notes.jsx";
import NotesDetails from "./Pages/NotesDetails.jsx";
import Events from "./Pages/Events.jsx";
import EventDetails from "./Pages/EventDetails.jsx";

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
  {
    path: "/coding",
    element: <Coding />,
  },
  {
    path: "/dsa-sheet",
    element: <DSASheet />,
  },
  {
    path: "/notes",
    element: <Notes />,
  },
  {
    path: "/notes-details",
    element: <NotesDetails />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/event-details",
    element: <EventDetails />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
