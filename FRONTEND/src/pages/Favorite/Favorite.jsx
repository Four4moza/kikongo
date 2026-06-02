import React, { useState } from "react";
import "./Favorite.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import WordCard from "../../components/WordCard/WordCard";
import { FaTrash } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
// IMPORTA ESTES SE EXISTIREM
// import SearchBar from "../../components/SearchBar/SearchBar";
// import WordCard from "../../components/WordCard/WordCard";

const INITIAL_WORDS = [
  { word: "Ntondele", pronunciation: "/ntondele/", translation: "Obrigada" },
  { word: "Nzo", pronunciation: "/nzó/", translation: "Casa" },
  { word: "Ngudi", pronunciation: "/ngú-di/", translation: "Mãe" },
  { word: "Nkazi", pronunciation: "/nká-zi/", translation: "Sobrinho(a)" },
  { word: "Muntu", pronunciation: "/mun-tu/", translation: "Pessoa" },
];

export default function Favorite() {
  const [words, setWords] = useState(INITIAL_WORDS);
  const [search, setSearch] = useState("");

  const handleRemove = (wordToRemove) => {
    setWords((prev) => prev.filter((w) => w.word !== wordToRemove));
  };

  const filtered = words.filter(
    (w) =>
      w.word.toLowerCase().includes(search.toLowerCase()) ||
      w.translation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="favorite-page">
      <Sidebar />

      <div className="favoritos">
        <div className="favoritos__header">
          <div className="favoritos__title-group">
            <h1 className="favoritos__title">Favoritos</h1>
            <p className="favoritos__subtitle">
              Palavras e frases que guardou pra revisão rápida
            </p>
          </div>

          
         <SearchBar value={search} onChange={setSearch} /> 
        </div>

        <div className="favoritos__list">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div key={item.word} className="word-card">
                <button className="ouvir" onClick={() => console.log("Reproduzir áudio para:", item.word)}>
                  <FaVolumeUp />
                <p className="pronu">{item.pronunciation}</p>
                </button>
                <h3>{item.word}→</h3><p className="translation">{item.translation}</p> <br />
                <br /> <br />
                <div className="lol">
                <button className="nao" onClick={() => handleRemove(item.word)}>
                  <FaTrash />
                </button>
                 </div>
              </div>
            ))
          ) : (
            <p className="favoritos__empty">Nenhuma palavra encontrada.</p>
          )}
        </div>
      </div>
    </div>
  );
}