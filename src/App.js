import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import  * as actions from './actions/catActions.js';
import catsReducer from './reducers/cats_reducer'
import CatList from './CatList';

class App extends Component {   

  componentDidMount() {
    if (this.props.catPics.length === 0) {	                       
			return this.props.fetchCats();	           
		}
  }
 
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { catPics: state.cats.pictures }
}
 
function mapDispatchToProps(dispatch) {		
  return { fetchCats: () => dispatch(actions.fetchCats())}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

