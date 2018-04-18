import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList';

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
        <CatList catPics={this.props.catPics}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { catPics: state.cats }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCats })
}

// export default connect(mapStateToProps)(App)
export const WrapperApp = connect(mapStateToProps)(App)

