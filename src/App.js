import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList';
import * as actions from './actions/catActions.js'



export class App extends Component {

  componentDidMount() {
    if (this.props.catPics.length === 0) {
      console.log('in component did mount')
      this.props.actions.fetchCats()
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

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({fetchCats: fetchCats}, dispatch)
// };
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    catPics: state.cats.pictures
  };
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);
