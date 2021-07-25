import React ,{Component} from 'react' ;
import SearchResult from './SearchResult'
import CloseSearch from './CloseSearch'
import SearchBookInput from './SearchBooksInput';
import * as BooksAPI from '../BooksAPI'
import { debounce } from 'throttle-debounce';



class SearchPage extends Component{
    //query state which holds the user input from the search bar
    //searchedBooks array which holds the boosk that matched the searched query
    //noBooks that gets updated when the query doesnt match any book 
    state={
      query:'',
      searchedBooks:[],
      noBooks:'',
    };

    updateQuery=query=>{ 
      this.setState({ query:query})
      this.searchForBooks(query)
    }

    searchForBooks =debounce(300, false, query => {
      if (query.length > 0) {
        BooksAPI.search(query).then(books => {
          if (books.error) {
            this.setState({ searchedBooks: [],noBooks:'No Books Found', });
          } else {
            this.setState({ searchedBooks: books,noBooks:'' });
          }
        });
      } else {
        this.setState({ searchedBooks: [],noBooks:'' });
      }
    })
  
    resetSearch = () => {
      this.setState({ searchedBooks: [] });
    };
  
    render(){
      const { books,moveBook } = this.props;
        return(
          <div className="search-books">
            <div className="search-books-bar">
            <CloseSearch resetSearch={this.resetSearch} />
            <SearchBookInput  query={this.state.query} updateQuery={this.updateQuery} />
            </div>
            <SearchResult 
                books={books} 
                searchedBooks={this.state.searchedBooks}
                moveBook={moveBook}
                noBooks={this.state.noBooks} />
          </div>
        )
    }
  }
export default SearchPage;