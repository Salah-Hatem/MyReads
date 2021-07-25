import React ,{Component} from 'react' ;
import OpenSearch from './OpenSearch'
import Shelf from './Shelf';



class Home extends Component{
  render(){
    const {books,moveBook } = this.props
      return(
        <div>
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
          <div>
              
            <Shelf  books={books} moveBook={moveBook} title='currentlyReading' titleName='Currently Reading' />
            <Shelf  books={books} moveBook={moveBook} title='wantToRead' titleName='Want to Read' />
            <Shelf  books={books} moveBook={moveBook} title='read' titleName='Read' />

          </div>
        </div>
        </div>
        <OpenSearch/>
        </div>

      )
  }
}
export default Home;