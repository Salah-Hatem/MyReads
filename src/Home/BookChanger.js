import React ,{Component} from 'react' ;


class BookChanger extends Component{
    //a Method that invokes the moveBook method passing it the book data object and the shelf name clicked
    handleChange=event=>{
      this.props.moveBook(this.props.bookData,event.target.value)
    }
  
    render(){
        return(
          <div className="book-shelf-changer">
          <select value={this.props.shelfTitle} onChange={this.handleChange} >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
        )
    }
  }
export default BookChanger;