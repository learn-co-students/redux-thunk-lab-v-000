import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {fetchCats} from './actions/catActions'

import {Navbar} from 'react-bootstrap'
import CatList from './CatList'

class App extends Component {   


  componentDidMount() {
    this.props.fetchCats()
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
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    catPics: state.cats.pictures
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchCats: fetchCats}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)






// const mapStateToProps = state => {
//   return {
//     todos: state.todos
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: todo => dispatch({type: 'DELETE_TODO', payload: todo })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
