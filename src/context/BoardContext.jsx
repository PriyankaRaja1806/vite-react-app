import React, { createContext, useState, useEffect } from "react";
import mockTasks from "../mockTasks.json";

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(mockTasks);
  }, []);

  const moveCard = (id, newColumn) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, column: newColumn } : card
      )
    );
  };

  const addCard = (newCard) => {
    setCards((prev) => [...prev, { ...newCard, id: Date.now() }]);
  };

  const updateCard = (updatedCard) => {
  setCards(prev => {
    const newCards = prev.map(card =>
      card.id === updatedCard.id ? updatedCard : card
    );
    console.log("Updated cards state:", newCards);
    return newCards;
  });
};
  return (
    <BoardContext.Provider value={{ cards, moveCard, addCard, updateCard }}>
      {children}
    </BoardContext.Provider>
  );
};
