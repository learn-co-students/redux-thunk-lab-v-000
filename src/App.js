import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'
import CatList from './CatList'

class App extends Component {
  constructor(props){
    super(props)

    this.setState = ({
      loading: false,
      pictures: []
    })
  }

  componentDidMount() {
     this.props.fetchCats();
   }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <div>
                <CatList catPics={this.state.catPics}/>
              </div>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.catPics
  }
}



export default connect(mapStateToProps, {fetchCats})(App);
