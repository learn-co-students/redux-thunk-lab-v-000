import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { fetchCats } from './actions/catActions';
import { connect } from 'react-redux';
import CatList from './CatList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      catPics: []
    }
  }

  componentDidMount() {
    this.props.fetchCats();
    this.setState({
      catPics: this.props.catPics
    });
    debugger
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
        <CatList catPics={this.state.catPics} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.pictures
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
