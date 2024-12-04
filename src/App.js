import Idosos from './pages/Idosos'
import Home from './pages/Home'
import IdosoDetails from './pages/IdosoDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/idosos" element={<Idosos />} />
          <Route path="/idosos/:id" element={<IdosoDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

