import React, { useContext, useState, useEffect } from "react";
import { BoardContext } from "../context/BoardContext";
import Column, { COLUMN_ORDER } from "./Column";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import Modal from "./Modal";

const ALL_LABELS = ["Bugs", "Meta", "Regression", "Feature", "Blocked"];

export default function Board() {
  const { cards, moveCard, updateCard } = useContext(BoardContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalCard, setModalCard] = useState(null);
  const [labels, setLabels] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [checklist, setChecklist] = useState([]);
  const [newChecklistItem, setNewChecklistItem] = useState("");

  useEffect(() => {
    if (modalOpen && modalCard) {
      setLabels(Array.isArray(modalCard.labels) ? modalCard.labels.join(", ") : modalCard.labels || "");
      setComments(Array.isArray(modalCard.comments) ? modalCard.comments : []);
      setAttachments(Array.isArray(modalCard.attachments) ? modalCard.attachments : []);
      setChecklist(
        Array.isArray(modalCard.checklists)
          ? modalCard.checklists
          : Array.isArray(modalCard.checklist)
          ? modalCard.checklist
          : []
      );

      setNewComment("");
      setNewChecklistItem("");
    }
  }, [modalOpen, modalCard]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { draggableId, source, destination } = result;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) return;

    const cardId = parseInt(draggableId, 10);
    if (source.droppableId !== destination.droppableId) {
      moveCard(cardId, destination.droppableId);
    }
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalCard({ ...card });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
    setModalCard(null);
  };

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
    }
  };

  const addAttachment = (e) => {
    const files = Array.from(e.target.files);
    setAttachments([...attachments, ...files.map((f) => f.name)]);
  };

  const addChecklistItem = () => {
    if (newChecklistItem.trim()) {
      setChecklist([...checklist, { text: newChecklistItem, done: false }]);
      setNewChecklistItem("");
    }
  };

  const toggleChecklistItem = (index) => {
    const updated = [...checklist];
    updated[index].done = !updated[index].done;
    setChecklist(updated);
  };

  const handleLabelToggleLocal = (label) => {
    let currentLabels = labels.split(",").map((l) => l.trim()).filter(Boolean);
    if (currentLabels.includes(label)) {
      currentLabels = currentLabels.filter((l) => l !== label);
    } else {
      currentLabels.push(label);
    }
    setLabels(currentLabels.join(", "));
  };

  const handleSave = (updatedCardFromModal) => {
    if (!updatedCardFromModal) return;
    console.log("Saving card:", updatedCardFromModal); 
    updateCard(updatedCardFromModal);
    setSelectedCard(updatedCardFromModal);
    setModalOpen(false);
    setModalCard(null);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          {COLUMN_ORDER.map((col) => (
            <Droppable key={col} droppableId={col}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="column"
                  style={{
                    backgroundColor: snapshot.isDraggingOver ? "#e6f7ff" : undefined,
                  }}
                >
                  <Column
                    title={col}
                    cards={cards.filter((card) => card.column === col)}
                    onCardClick={handleCardClick}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        onSave={() =>
          handleSave({
            ...modalCard,
            labels: labels.split(",").map((l) => l.trim()).filter(Boolean),
            comments,
            attachments,
            checklists: checklist,
          })
        }
        card={modalCard}
        labels={labels}
        setLabels={setLabels}
        comments={comments}
        setComments={setComments}
        newComment={newComment}
        setNewComment={setNewComment}
        addComment={addComment}
        attachments={attachments}
        addAttachment={addAttachment}
        checklist={checklist}
        newChecklistItem={newChecklistItem}
        setNewChecklistItem={setNewChecklistItem}
        addChecklistItem={addChecklistItem}
        toggleChecklistItem={toggleChecklistItem}
      >
        {modalCard && (
          <>
            <h2>{modalCard.title}</h2>
            {modalCard.description && <p>{modalCard.description}</p>}

            <div>
              <strong>Labels:</strong>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  margin: "8px 0",
                }}
              >
                {ALL_LABELS.map((label) => (
                  <button
                    key={label}
                    onClick={() => handleLabelToggleLocal(label)}
                    style={{
                      padding: "4px 12px",
                      borderRadius: "16px",
                      border: labels.split(",").includes(label)
                        ? "2px solid #007baf"
                        : "1px solid #bbb",
                      background: labels.split(",").includes(label)
                        ? "#d0ebff"
                        : "#f5f5f5",
                      color: "#222",
                      cursor: "pointer",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
