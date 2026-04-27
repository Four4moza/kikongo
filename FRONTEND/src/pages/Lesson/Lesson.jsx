import "./Lesson.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import LessonCard from "../../components/LessonCard/LessonCard";

import {
  BookOpen,
  MessageCircle,
  Users,
  Utensils
} from "lucide-react";

export default function Lessons() {

  const lessons = [
    {
      title: "Básicos",
      progress: 100,
      icon: <BookOpen size={28} />,
      color: "red"
    },
    {
      title: "Saudações",
      progress: 66,
      icon: <MessageCircle size={28} />,
      color: "blue"
    },
    {
      title: "Família",
      progress: 0,
      icon: <Users size={28} />,
      color: "green"
    },
    {
      title: "Comida e bebida",
      progress: 40,
      icon: <Utensils size={28} />,
      color: "orange"
    }
  ];

  return (
    <div className="layout">

      <Sidebar />

      <main className="content">

        <h1>Lições</h1>

        <p className="subtitle">
          Escolha uma categoria para começar a aprender
        </p>

        <div className="cards">

          {lessons.map((lesson, index) => (

            <LessonCard
              key={index}
              {...lesson}
            />

          ))}

        </div>

      </main>

    </div>
  );
}