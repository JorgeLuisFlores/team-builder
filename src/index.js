import React, { useState } from "react";
import ReactDOM from "react-dom";
import Notes from "./notes.js";
import MemberForm from "./form.js";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import "./App.css";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Jorge",
      email: "test@gmail.com",
      role: "Full Stack Dev"
    },
    {
      id: 2,
      name: "Ana",
      email: "test@gmail.com",
      role: "Front End Dev"
    },
    {
      id: 3,
      name: "Jameson",
      email: "test@gmail.com",
      role: "Back End Dev"
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div>
      <MemberForm addMemberFn={addMember} />
      <Notes notesList={members} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
