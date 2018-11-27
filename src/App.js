import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import { connect } from 'react-redux';
import {fetchCats} from './actions/catActions';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {catPics: []}
}

  componentDidMount(){
    this.props.fetchCats()
  }


  render() {
    const  getCats = (e) =>{
      e.preventDefault()
      console.log("got here:", this.props.catPics )
      this.setState((state,props)=>{
        return {catPics: this.props.catPics}
      }

      )
    }


    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="" onClick={getCats} >CatBook</a>
              {/* {catList} */}
               <CatList catPics={this.state.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  console.log("STATE:", state.cats.pictures)
  return {catPics: state.cats.pictures}

}


export default connect(mapStateToProps,{fetchCats})(App)

// Should the click of a link render the list
//  or should componet render and then list is created in componet?
