import React ,{Component} from 'react' ;
import { Link } from 'react-router-dom';



class CloseSearch extends Component{
    render() {
        return (
            <Link to="/">
                <button className="close-search" onClick={this.props.resetSearch}>Close</button>
            </Link>       
    );
    }
  }
export default CloseSearch;