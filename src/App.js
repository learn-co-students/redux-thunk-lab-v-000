import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';  
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {

  // Right after render, componentDidMount will
  // fire off fetchCats()
  componentDidMount(){
    this.props.fetchCats();
  }
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log("The state is: ", state);
  return {catPics: state.cats,};
}
const mapDispatchToProps = dispatch => ({fetchCats: () => dispatch(fetchCats())})

export default connect(mapStateToProps, mapDispatchToProps)(App)

