import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {fetchCats} from './actions/catActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CatList from './CatList'
export class App extends Component {


  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={this.props.catPics}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {catPics: state.cats}
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats
  }, dispatch)
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
