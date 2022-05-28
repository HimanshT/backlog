//bootstrap files
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//components
import Nvbar from "./pages/Navbar";
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainSearch from "./pages/MainSearch";

//browser-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nvbar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="mainsearch" from element={<MainSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
