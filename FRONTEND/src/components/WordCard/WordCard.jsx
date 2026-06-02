import "./WordCard.css";

export default function WordCard({
  word,
  pronunciation,
  translation,
  onRemove,
}) {
  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "pt-PT";
      utterance.rate = 0.9;

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="word-card">
      <div className="word-card__left">
        <button
          className="speak-btn"
          onClick={handleSpeak}
          title="Ouvir pronúncia"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 010 14.14" />
            <path d="M15.54 8.46a5 5 0 010 7.07" />
          </svg>
        </button>

        <div className="word-card__info">
          <div className="word-card__text">
            <span className="word-original">{word}</span>
            <span className="word-arrow">→</span>
            <span className="word-translation">{translation}</span>
          </div>

          <span className="word-pronunciation">
            {pronunciation}
          </span>
        </div>
      </div>

      <button
        className="remove-btn"
        onClick={() => onRemove(word)}
        title="Remover dos favoritos"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <rect x="5" y="6" width="14" height="14" rx="2" />
          <line x1="10" y1="10" x2="10" y2="16" />
          <line x1="14" y1="10" x2="14" y2="16" />
        </svg>
      </button>
    </div>
  );
}