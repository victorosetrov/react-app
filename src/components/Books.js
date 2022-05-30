import React from 'react'
import Book from  './'

function Books(props){
  return (
    <ul>
      {props.authors.map(function(i, index) {
        return (
          <li key={index}>
            <Book
            author={i.author}
            book={i.book}
            year={i.year}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Books
