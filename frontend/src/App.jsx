import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import WrongPage from "./pages/WrongPage";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./styles/index.scss";
import User from "./pages/User";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/users/:id",
        element: <User />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <WrongPage />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
