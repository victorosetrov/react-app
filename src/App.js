import logo from './logo.svg';
import './App.css';
import Example from './components/Example'
import Book from  './components/'
import Books from  './components/Books'

function App() {
  var authors = [
    {
      author:"Tom Mitchell",
      book:"Machine Learning",
      year:1999
    },
    {
      author:"Ian Goodfellow",
      book:"Deep Learning",
      year:2016
    },
    {
      author:"Russel Norvig",
      book:"AI a Modern Approach",
      year:2015
    },
  ]

  var x = Math.random()
  /* this is a comment line */
  /* console.log(x) */
  if (x > 0.5){
    return (
      <div>
        {/* This is a comment line formatted for HTML */}
        {/* <Example /> */}

        <Books authors={authors} />
      </div>
    );
  } else {
    return (
      <div>
        Hello World
        <Example />
      </div>
    );
  }

}

export default App;
