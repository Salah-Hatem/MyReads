import React ,{Component} from 'react' ;
import Book from '../Home/Book'



class SearchResult extends Component{
    render() {
      const { searchedBooks, moveBook,books,noBooks } = this.props;
      const updatedBooks = searchedBooks.map(book => {
        books.map(b => {
          if (b.id === book.id) {
            book.shelf = b.shelf;
          }
          return b;
        });
        return book;
      });
      
        return (
          <div className="search-books-results">
            <ol className="books-grid">
              {
              updatedBooks.map(book => (
              <Book
                key={book.id}
                bookData={book}
                shelfTitle={book.shelf ? book.shelf : 'none'}
                moveBook={moveBook}
              />
              ))}
            </ol>
            <div className="books-grid">{noBooks}</div>
          </div>
        );
    }
  }
export default SearchResult;