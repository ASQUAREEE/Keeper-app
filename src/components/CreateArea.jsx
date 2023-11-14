import { useState } from "react";
import React  from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const[details, setDetails] = useState({

   title:"",
   content: "",

    });

    function handleChange(event) {

     const {name, value} = event.target;


        setDetails(
            (prev)=>{
                
                return{
                ...prev,

                [name]: value
                }

            }
        );

   


    }

    function submitNote(event) {
        props.onAdd(details);
        setDetails({
          title: "",
          content: "",
        });
event.preventDefault();



    }
    function expand() {
        setExpanded(true);
      }

   
    

  return (
    <div>
      <form className="create-note">
      {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={details.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={details.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
