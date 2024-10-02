import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MoviesList from "./components/main/MoviesList";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <MoviesList />,
      },
    ],
  },
]);
