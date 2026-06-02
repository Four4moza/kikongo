import "./LessonCard.css";

export default function LessonCard({
  title,
  progress,
  icon,
  color
}) {
  return (
    <div className="lesson-card">

      <div className="lesson-card-header">

        <div className={`lesson-card-icon ${color}`}>
          {icon}
        </div>

        <h3>{title}</h3>

      </div>

      <div className="lesson-progress-section">

        <div className="lesson-progress-info">
          <span>Progresso</span>
          <span>{progress}%</span>
        </div>

        <div className="lesson-progress-bar">
          <div
            className="lesson-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>

      <div className="lesson-card-buttons">

        <button className="lesson-btn-primary">
          Continuar
        </button>

        <button className="lesson-btn-secondary">
          Quizz
        </button>

      </div>

    </div>
  );
}