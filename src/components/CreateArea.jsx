import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        )}
        
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        
          <Zoom in={isExpanded}>
          <button onClick={submitNote}>
            <AddIcon/>
          </button>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
