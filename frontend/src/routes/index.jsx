import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../page/HomePage";
import EventsPage, { loader as eventsLoader } from "../page/EventsPage";
import EventDetailPage from "../page/EventDetailPage";
import NewEventPage from "../page/NewEventPage";
import EditEventPage from "../page/EditEventPage";
import AppLayout from "../Layout/AppLayout";
import EventsRootLayout from "../page/EventRoot";
import ErrorPage from "../page/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,

        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            element: <EventDetailPage />,
          },
          {
            path: "new",
            element: <NewEventPage />,
          },
          {
            path: ":eventId/edit",
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
