import React ,{Component} from 'react' ;
import BookChanger from './BookChanger'


class Book extends Component{
  render(){
        const { bookData, shelfTitle,moveBook } = this.props;
      return(
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${//Dealing with the books missing thumbnail
                  bookData.imageLinks
                    ? bookData.imageLinks.thumbnail
                    : 'https://dummyimage.com/130x200/f5f5f5/000000&text=Image+not+found'

                    
                })`
              }}
            />
            <BookChanger bookData={bookData} shelfTitle={shelfTitle} moveBook={moveBook} />
          </div>
          <div className="book-title">{bookData.title}</div>
          <div className="book-authors">
            { bookData.authors ? bookData.authors.join(', ') : 'Unknown Author'}
          </div>
        </div>
      </li>
      
      )
  }
}
export default Book;