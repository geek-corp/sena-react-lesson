import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Torneos from "./pages/Torneos";
import Videojuegos from "./pages/Videojuegos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="torneos-muchachos" element={<Torneos />} />
          <Route path="videojuegos" element={<Videojuegos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;