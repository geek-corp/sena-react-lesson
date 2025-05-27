import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Torneos from "./pages/Torneos";
import Videojuegos from "./pages/Videojuegos";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="torneos" element={<Torneos />} />
          <Route path="videojuegos" element={<Videojuegos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;