import React ,{Component} from 'react' ;
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import SearchPage from './SearchPage/SearchPage';


class BooksApp extends Component {
  
  // books State to hold the books array from BooksAPI 
  //error to catch any error if there is a problem with the API (error will show in the console only)
  state = {
    books:[],
    error:false
  }
  //move Book Method to move books between shelfs takes two argument (a book info Object, shelf name string)
  //it takes the promise resolve from the API and then checks if the book is already added to a shelf or not 
  //then filters the books array 
  
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).catch(err => {
      console.log(err);
      this.setState({ error: true });
    });
    if (shelf === 'none') {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    }
  };
  //gets the books array from the api
  componentDidMount(){
    BooksAPI.getAll().then(
      (response)=>this.setState({
        books: response
      })

      ).catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  };

  render() { 
    return (
      <div className="app">
        <Route exact path="/" render={()=>(<Home books={this.state.books} moveBook={this.moveBook} />)} />
        <Route exact path="/search" render={()=>(<SearchPage books={this.state.books} moveBook={this.moveBook} />)}  />
      </div>
    )
  }
}

export default BooksApp
 

