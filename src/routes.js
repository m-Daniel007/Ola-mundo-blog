import Menu from "components/Menu";
import Rodape from "components/Rodape";
import Inicio from "pages/Inicio";
import SobreMim from "pages/SobreMim";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
