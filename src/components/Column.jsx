
import React from "react";
import Card from "./Card";
import { Draggable } from "@hello-pangea/dnd";
import AddCardForm from "./AddCardForm";

export const COLUMN_ORDER = ["Backlog", "Sprint Backlog", "In Progress", "Sprint Complete"];

export default function Column({ title, cards, onCardClick }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="cards-list">
        {cards.map((card, index) => (
          <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={{
                  userSelect: "none",
                  margin: "0 0 8px 0",
                  boxShadow: snapshot.isDragging ? "0 0 8px #1890ff" : "none",
                  ...provided.draggableProps.style,
                }}
                onClick={() => onCardClick && onCardClick(card)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") onCardClick && onCardClick(card);
                }}
              >
                <Card data={card} />
              </div>
            )}
          </Draggable>
        ))}
      </div>
      {title === "Backlog" && <AddCardForm />}
    </div>
  );
}
