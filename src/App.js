import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchCats} from './actions/catActions';
import CatList from './CatList';

export class App extends Component {   

  componentDidMount() {
    if (this.props.catPics.length === 0) {
      this.props.fetchCats()
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
    );
  }
}

function mapDispatchToProps(dispatch) {
  bindActionCreators({fetchCats: fetchCats}, dispatch)
}

function mapStateToProps(state) {
  return {catPics: state.catPics}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);

