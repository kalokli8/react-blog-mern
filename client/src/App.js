import Topbar from "./components/topbar/TobBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Footer from "./components/footer/Footer";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        {user ? (
          <Route path="/register" element={<Home />}></Route>
        ) : (
          <Route path="/register" element={<Register />}></Route>
        )}

        {user ? (
          <Route path="/login" element={<Home />}></Route>
        ) : (
          <Route path="/login" element={<Login />}></Route>
        )}

        {user ? (
          <Route path="/write" element={<Write />}></Route>
        ) : (
          <Route path="/write" element={<Register />}></Route>
        )}

        {user ? (
          <Route path="/settings" element={<Settings />}></Route>
        ) : (
          <Route path="/write" element={<Register />}></Route>
        )}

        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
