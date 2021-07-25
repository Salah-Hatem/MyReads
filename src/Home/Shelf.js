import React ,{Component} from 'react' ;
import Book from './Book'


class Shelf extends Component{
  render(){ 
    const{title,books,moveBook,titleName}=this.props
      return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{titleName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {books.filter(book => book.shelf === title).map(book => (
              <Book key={book.id}  bookData={book} shelfTitle={title} moveBook={moveBook} />
            ))}
            </ol>
          </div>
        </div>
      )
  }
}
export default Shelf;