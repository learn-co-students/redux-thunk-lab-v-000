import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import CatList from './CatList.js';
import { fetchCats } from './actions/catActions';
import { bindActionCreators } from 'redux'


export class App extends React.Component {   

  componentDidMount() {
    this.props.fetchCats();
  }
  
  render() {
  
    return (

      <div>

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

const mapStateToProps = (state) => {
  return {
    catPics: state.cats.pictures
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch);
}


// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     fetchPerfume: fetchPerfume,
//     addPerfume: addPerfume,
//     deletePerfume: deletePerfume,
//     getRecommendation: getRecommendation    
//   }, dispatch);
// };


export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);

