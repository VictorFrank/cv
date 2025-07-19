import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Frontpage from "./Frontpage.tsx";
import MtgDataInput from "./MtgDataInput.tsx";
import MtgDataAnalysis from "./MtgDataAnalysis.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/mtgInput" element={<MtgDataInput />} />
          <Route path="/mtgAnalysis" element={<MtgDataAnalysis />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
