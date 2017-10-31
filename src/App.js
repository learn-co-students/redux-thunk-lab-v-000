import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import CatList from './CatList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCats } from './actions/catActions';

export class App extends Component {

  componentDidMount() {
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
        <CatList name="CatList" catPics={this.props.catPics} />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCats}, dispatch)
}

function mapStateToProps(state){
  return {catPics: state.cats.cats}
}

// export default connect(mapStateToProps)(App) <-- this is what you'd use if you don't need code to be testable

// use below code just for testing purposes so you can test the App
// without it being connected via mapDispatchToProps and mapStateToProps
export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
