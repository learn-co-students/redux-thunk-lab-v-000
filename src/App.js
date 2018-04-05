import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {CatList} from './CatList'

class App extends Component {

  componentDidMount() {
    this.props.store.dispatch(fetchCats())
  }
//
// So, we want to dispatch the fetchCats function from inside our component, specifically from inside the
// componentDidMount function. We'll need to use mapDispatchToProps in order to make our fetchCats function
// dispatch-able from within our component.

  render() {

    return(
        <div className="App">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">CatBook</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
        </div>
      );
    }
 }

 function mapDispatchToProps(dispatch){
   bindActionCreators({fetchCats: fetchCats}, dispatch)
  }

function mapStateToProps(state){
  return {catPics: state.cats}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
