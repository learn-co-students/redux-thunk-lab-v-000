import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList';



export class App extends Component {

  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList cats={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchCats: fetchCats}, dispatch)
};


const mapStateToProps = (state) => {
  console.log(state)
  return {
    catPics: state.cats.pictures
  };
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);
