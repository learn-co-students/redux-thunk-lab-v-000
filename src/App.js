import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCats } from './actions/catActions';
import { CatList } from './CatList'


class App extends Component {

  componentDidMount(){
    this.props.fetchCats();
  }

  render() {
    let { cats } = this.props
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={cats}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {cats: state.cats}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
