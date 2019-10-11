import React from "react";

const Notes = props => {
  return (
    <div>
      {props.notesList.map(member => {
        return (
          <div key={member.id}>
            <p>{member.name}</p>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
