import { BrowserRouter, Routes, Route } from "react-router-dom"

import Main from "./pages/Main/Main"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import Lesson from "./pages/Lesson/Lesson"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Página inicial */}
        <Route path="/" element={<Main />} />

        {/* Página de login e signup */}
        <Route path="/login" element={<Login />} />

         <Route path="/signup" element={<SignUp />} />

   <Route
          path="/lesson"
          element={<Lesson />}
        />
      </Routes>

    </BrowserRouter>
  )
}