import React from "react";
// import "./main.css"; // Импортируем CSS-файл

export default function DeleteButton({clickHandler, text, title}){
  return (
    <button className="delBtn"
      onClick={clickHandler}
      style={{
        marginLeft: "10px",
        padding: '10px 15px',
        fontSize: '14px',
        cursor: 'pointer',
        // backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
      }}
      title = {title}
    >
      {text}
    </button>
  )
}