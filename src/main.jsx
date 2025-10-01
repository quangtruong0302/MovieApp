import { Children, lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@pages/RootLayout";
import ModalProvider from "@context/ModalProvider";
// import HomePage from "@pages/HomePage";
// import MovieDetail from "@pages/MovieDetail";
// import TVShowDetail from "@pages/TVShowDetail";
// import PeopleDetail from "@pages/PeopleDetail";

const MovieDetail = lazy(() => import("@pages/MovieDetail"));
const TVShowDetail = lazy(() => import("@pages/TVShowDetail"));
const PeopleDetail = lazy(() => import("@pages/PeopleDetail"));
const HomePage = lazy(() => import("@pages/HomePage"));
const SearchPage = lazy(() => import("@pages/SearchPage"));

const router = createBrowserRouter([
  {
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/tvshow/:id",
        element: <TVShowDetail />,
      },
      {
        path: "/people/:id",
        element: <PeopleDetail />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
              },
            }
          );
          return res;
        },
      },
      {
        path: "/search",
        element: <SearchPage></SearchPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <RouterProvider router={router}></RouterProvider>
  </ModalProvider>
);
