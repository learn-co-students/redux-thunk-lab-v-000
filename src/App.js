import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatList from './CatList';
import { fetchCats } from './actions/catActions';

class App extends Component {   
  
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div>
        {!this.props.loading ?
          <div className="App">
            <h1>CatBook</h1>
            <CatList catPics={this.props.catPics} />
          </div>
          :
          <div>Loading...</div>
        }
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading  
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

