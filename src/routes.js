import Menu from "components/Menu";
import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import ScrollToTop from "components/helper/ScrollToTop";
import Inicio from "pages/Inicio";
import Pagina404 from "pages/Pagina404";
import Post from "pages/Post";
import SobreMim from "pages/SobreMim";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop/>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
      <Rodape />
    </Router>
  );
}

export default AppRoutes;
