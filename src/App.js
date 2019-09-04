import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'

class App extends Component {
  // state = {
  //   catPics: 'images'
  // }

  componentDidMount() {
    this.props.fetchCats()
    // fetch the cats
  }


  render() {

    const catPics = [{url: "www.example.com/cat1"}, {url: 'www.example.com/cat2'}]

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="http://localhost:4000/db">CatBook</a>
                <div>
                  <CatList fetchCats={this.props.fetchCats} catPics={catPics}/>
                </div>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {cats: state.cats}
}


function mapDispatchToProps(dispatch){
//  loadingCats: name => dispatch({ type: "LOADING_CATS", name }),
return { fetchCats: () => dispatch(fetchCats()) }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
