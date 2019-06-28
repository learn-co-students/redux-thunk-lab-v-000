import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    console.log('component mounted!');
    this.props.fetchCats()
  }

  render() {
    const { catPics } = this.props;
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={this.props.catPics}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats.pictures
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => { dispatch(fetchCats()) }
  }
}


export default connect(mapStateToProps, { fetchCats })(App);
