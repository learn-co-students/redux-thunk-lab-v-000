import React from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

// import * as actions from './actions/catActions';
// import { bindActionCreators } from 'redux';

export class App extends React.Component {

  componentDidMount() {
    console.log('componentDidMount')
    this.props.onFetchCats();
    // this.props.actions.fetchCats();
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
        <CatList catPics={this.props.catPics} />
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
    onFetchCats: () => dispatch(fetchCats())
  }
}

// const mapDispatchToProps = dispatch => {
//   return { actions: bindActionCreators(actions, dispatch) }
// }

// export connect(mapStateToProps, mapDispatchToProps)(App)
export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
