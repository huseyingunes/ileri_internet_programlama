import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Yerlesim from "./sayfalar/Yerlesim";
import Anasayfa from "./sayfalar/Anasayfa";
import Bizkimiz from "./sayfalar/Bizkimiz";
import Iletisim from "./sayfalar/Iletisim";
import Sayfayok from "./sayfalar/Sayfayok";
import Hg from "./sayfalar/Hg";
import Parametre from "./sayfalar/Parametre";
import Css from "./sayfalar/Css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Yerlesim />}>
          <Route index element={<Anasayfa />} />
          <Route path="bizkimiz" element={<Bizkimiz />} />
          <Route path="bizkimiz/hg" element={<Hg />} />
          <Route path="parametre/:kisi" element={<Parametre />} />
          <Route path="parametre/:kisi/:eleman" element={<Parametre />} />
          <Route path="iletisim" element={<Iletisim />} />
          <Route path="css" element={<Css />} />
          <Route path="*" element={<Sayfayok />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
)
