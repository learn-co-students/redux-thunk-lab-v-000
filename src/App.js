import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    const mapDispatchToProps = dispatch => ({
      fetchCats: catPic => dispatch({type: 'LOADING_CATS'})
    })
  }

  renderCatList = () => this.props.catPics.map((catPic, id) => <CatList key={id} />)

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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { catPics: state.cats }
}

export default connect(mapStateToProps)(App);
