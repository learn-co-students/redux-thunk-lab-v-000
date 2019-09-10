import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    const { fetchCats } = this.props;
    fetchCats();
  }


  render() {
    console.log('in App - this.props', this.props)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.cats} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return { state: cats }
// }
const mapStateToProps = ({ pictures }) => ({ pictures })

export default connect(mapStateToProps, { fetchCats })(App)
