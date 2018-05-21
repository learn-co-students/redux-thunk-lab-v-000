import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/catActions.js'

export class App extends Component {
  componentDidMount() {
    if (this.props.catPics.length === 0) {
      console.log('in component did mount')
      this.props.actions.fetchCats()
    }
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

function mapStateToProps(state) {
  console.log('in map state to props')
  return {catPics: state.cats.pictures}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)



// import React, { Component } from 'react';
// import {Navbar} from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { fetchCats } from './actions/catActions';
// import { bindActionCreators } from 'redux';
// import CatList from './CatList'
//
// class App extends Component {
//   componentDidMount(){
//     this.props.fetchCats();
//   }
//   render() {
//     return (
//       <div className="App">
//         <Navbar>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="#">CatBook</a>
//             </Navbar.Brand>
//           </Navbar.Header>
//         </Navbar>
//         <CatList catPics={this.props.catPics}/>
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = state => {
//   return {catPics: state.cats};
// };
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({fetchCats: fetchCats}, dispatch);
// };
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
