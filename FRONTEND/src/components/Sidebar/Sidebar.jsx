import "./Sidebar.css";
import { Home, BookOpen, Star, User, Moon, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="logo">Mwana</h2>

      <nav>

        <NavLink to="/" className="menu-item">
          <Home size={22} />
          Página inicial
        </NavLink>

        <NavLink to="/lessons" className="menu-item">
          <BookOpen size={22} />
          Lições
        </NavLink>

        <NavLink to="/favorites" className="menu-item">
          <Star size={22} />
          Favoritos
        </NavLink>

        <NavLink to="/profile" className="menu-item">
          <User size={22} />
          Perfil
        </NavLink>

      </nav>

      <div className="bottom-icons">
        <Moon size={22} />
        <Settings size={22} />
      </div>

    </aside>
  );
}