import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  const currTime = new Date();
  const cleanedDateStr = currTime.toString().replace(/GMT.*$/, '').trim();
  console.log(currTime);

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="noteTime">
        <p id="timestamp">{cleanedDateStr}</p>
        <button onClick={handleClick}><DeleteIcon/></button>
      </div>
    </div>
  );
}

export default Note;
