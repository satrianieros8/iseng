import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DestinationPage from './pages/DestinationPage'
import InvitePage from './pages/InvitePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvitePage />} />
        <Route path="/kemana" element={<DestinationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
