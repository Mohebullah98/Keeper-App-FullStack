import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
function Note(props){
  return <div className="note">
  <h1>{props.title}</h1>
  <p>{props.content}</p>
  <button type ="button" onClick={()=>props.Delete({id:props.id,title:props.title,content:props.content})}><DeleteIcon /></button>
  </div>;
};
export default Note;
