import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import CatList from './CatList';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCats } from './actions/catActions'

class App extends Component {

  componentDidMount() {
    fetchCats()
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

function mapDispatchToProps(dispatch){
  bindActionCreators({fetchCats: fetchCats}, dispatch)
}


function mapStateToProps(state){
  return {catPics: state.cats}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

//export default App;
