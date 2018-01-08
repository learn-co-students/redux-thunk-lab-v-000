import React from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from "react-redux";
import { CatList } from './CatList'
import { bindActionCreators } from 'redux';
import { fetchCats } from './actions/catActions'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchCats()
  }
  render() {
    return (
      <div className="App">
      <p>IS THIS ON</p>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.cats} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {cats: state}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCats: fetchCats}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

