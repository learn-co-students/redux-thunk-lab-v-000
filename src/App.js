import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import CatList from './CatList';
import  { fetchCats } from './actions/catActions';
import { bindActionCreators } from 'redux'

class App extends Component {   
  
  componentDidMount(){
    this.props.fetchCats();
   
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
        {/* <div>
        <img src={this.props.cats[0].url} />
        </div> */}
          <CatList catPics={this.props.catsPics}/>  
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats,
  }, dispatch)
}


const mapStateToProps = state => {

  return { catsPics: state.cats.pictures };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

