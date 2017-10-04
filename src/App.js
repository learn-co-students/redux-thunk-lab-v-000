import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchCats from './actions/catActions'
import CatList from './CatList'
import {Navbar} from 'react-bootstrap'

export class App extends React.Component {
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
      <Navbar>
      <Navbar.Header>
      <Navbar.Brand>
      <div className="App">
        <a href="#">CatBook</a>
        <div>
          <CatList catPics={this.props.catPics}/>
        </div>
      </div>
      </Navbar.Brand>
           </Navbar.Header>
         </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {catPics: state.pictures}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({
    fetchCats: fetchCats
  }, dispatch);
};

// export default App;
// export const ConnectedApp = connect(mapStateToProps, {fetchCats}, mapDispatchToProps)(App);
// export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
// export const ConnectedApp = connect()(App);
// export default connect()(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
