import Menu from "components/Menu";
import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import Inicio from "pages/Inicio";
import SobreMim from "pages/SobreMim";

import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

function AppRoutes() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Rodape />
    </Router>
  );
}

export default AppRoutes;
