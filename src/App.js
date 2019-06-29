import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount(){
    const cats = this.props.fetchCats()
    this.setState({
      cats: cats
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
                <CatList catPics={this.props.cats.pictures}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cats: state.cats
})

export default connect(mapStateToProps, {fetchCats})(App)
