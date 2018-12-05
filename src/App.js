import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
class App extends Component {   
  
  componentDidMount() {
    this.props.fetchCats
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList pics={this.props.catPics}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {catPics: state.cats.pictures}
}

const mapDispatchToProps = dispatch => {
  return {fetchCats: fetchCats()}
}

export default connect(mapStateToProps, mapDispatchToProps) (App)

