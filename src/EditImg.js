import React, { useEffect, useState }  from 'react';
import './EditImg.css';
import edit from './edit.png'

function EditImg(props) {
    // const [hover, setHover] = useState(null);
    // let { mouseHoverState } = props;
    return (
        <img 
        className="edit"
        src={edit} 
        alt="edit"
        style={props.mouseHoverState ? {visibility: 'visible'} : {visibility: 'hidden'}}
      />
    )
}

export default EditImg