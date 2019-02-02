import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import CatList from './CatList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions/catActions';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchCats();
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
  return { catPics: state.cats.pictures }
}
const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
