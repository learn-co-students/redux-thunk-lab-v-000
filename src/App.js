import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'; /* code change */
import fetchCats from './actions/catActions'
import CatList from './CatList'

export class App extends Component {

  componentDidMount() {
    var cats = this.props.fetchCats()
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



const mapDispatchToProps = dispatch => {
  return {fetchCats: bindActionCreators(fetchCats, dispatch)}
}

const mapStateToProps = state => { console.log(state , 'mapStateToProps')
 return {catPics: state.cats.cats}
 }


//export default connect(mapStateToProps, mapDispatchToProps)(App)
 export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);
