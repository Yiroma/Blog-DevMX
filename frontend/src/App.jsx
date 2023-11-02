import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedLayout from "./layouts/ProtectedLayout";
import NavLayout from "./layouts/NavLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import User from "./pages/User";
import Write from "./pages/Write";
import WrongPage from "./pages/WrongPage";

import "./styles/index.scss";

function App() {
  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<WrongPage />} />

            {/* PRIVATE ROUTES */}
            <Route element={<ProtectedLayout />}>
              <Route path="/" element={<NavLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/posts/:id" element={<Single />} />
                <Route path="/write" element={<Write />} />
                <Route path="/users/:id" element={<User />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
