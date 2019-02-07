import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {fetchCats} from './actions/catActions';
import {connect} from 'react-redux';
import CatList from './CatList';

class App extends Component {
  componentDidMount() {
    if (this.props.pics.length === 0) {
      this.props.fetchCats()
    }
  }

  render() {
    if (this.props.loading) {
      return <p>Loading…</p>;
    }

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={this.props.pics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { pics: state.cats.pictures, loading: state.cats.loading };
}

function mapDispatchToProps(dispatch) {
  return { fetchCats: () => dispatch(fetchCats()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
