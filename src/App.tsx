import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Views
import HomeView from "./views/HomeView";
import About from "./views/AboutView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
