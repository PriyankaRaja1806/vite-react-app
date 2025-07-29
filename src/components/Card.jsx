import React from "react";
import './Card.css';


export default function Card({ data, moveNext }) {
  const { title, description, labels, assignees, comments, attachments, checklists } = data;

  return (
    <div className="card">
      <div className="card-labels">
        {labels.map((label, idx) => (
          <span key={idx} className={"label " + label.toLowerCase().replace(/\s/g, "-")}>
            {label}
          </span>
        ))}
      </div>
      <h3>{title}</h3>
      {description && <p className="desc">{description}</p>}

      <div className="card-footer">
        <div className="avatars">
          {assignees.map((user, idx) => (
            <img
              key={idx}
              src={user.avatar}
              alt={user.name}
              title={user.name}
              className="avatar"
            />
          ))}
        </div>

        <div className="icons">
          {comments > 0 && <span title="Comments">💬 {comments}</span>}
          {attachments > 0 && <span title="Attachments">📎 {attachments}</span>}
          {checklists > 0 && <span title="Checklists">✔️ {checklists}</span>}
        </div>
      </div>

      {moveNext && (
        <button onClick={moveNext} className="move-button">
          Move Next
        </button>
      )}
    </div>
  );
}
