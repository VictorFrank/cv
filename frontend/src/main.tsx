import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Frontpage from "./Frontpage.tsx";
import MtgDataInput from "./MtgDataInput.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/mtg" element={<MtgDataInput />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
