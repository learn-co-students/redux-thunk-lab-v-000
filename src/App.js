import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
// import * as actions from './actions/catActions';
import { fetchCats } from './actions/catActions';
// import { bindActionCreators } from 'redux';
import CatList from './CatList';

export class App extends Component {

  componentDidMount() {
    console.log('inside componentDidMount');
    console.log(`${this.props.catPics.length}`);
    if (this.props.catPics.length === 0) {
      this.props.fetchCats();
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



const mapStateToProps = state => {
  return {
    catPics: state.cats.pictures
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  };
};

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

// export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);