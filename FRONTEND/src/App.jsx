import { BrowserRouter, Routes, Route } from "react-router-dom"

import Main from "./pages/Main/Main"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Página inicial */}
        <Route path="/" element={<Main />} />

        {/* Página de login e signup */}
        <Route path="/login" element={<Login />} />

         <Route path="/signup" element={<SignUp />} />


      </Routes>

    </BrowserRouter>
  )
}