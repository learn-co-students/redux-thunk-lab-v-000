import React from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from "react-redux";
import { CatList } from './CatList'
import { bindActionCreators } from 'redux';
import { fetchCats } from './actions/catActions'

export class App extends React.Component {

  componentDidMount(){
    this.props.fetchCats()
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

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)


