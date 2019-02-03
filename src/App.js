import React, { Component } from 'react';
import { fetchCats } from './actions/catActions';
import { connect } from 'react-redux';
import CatList from './CatList';

class App extends Component {   

 componentDidMount() {
   this.props.fetchCats()
 }

  render() {
    return (
      <div className="App">   
      <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats.pictures
  }
}
export default connect(mapStateToProps, { fetchCats })(App)
