import React from 'react'

function Book(props){
  /* console.log(props) */
  return(
    <div>
      <h3>{props.author}</h3>
      <div>{props.book} - {props.year}</div>
    </div>
  );
}

export default Book;
