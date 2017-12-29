import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchCats} from './actions/catActions.js'
import {CatList} from './CatList.js'


export class App extends Component {   

  componentDidMount(){
     if (this.props.catPics.length === 0) {
      // console.log('in component did mount')
      this.props.actions.fetchCats()
    }
  }
  
  render() {
    return (
  
      <CatList catPics={this.props.catPics}/>
         
    )
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats.pictures
  }
}

function mapDispatchToProps(dispatch){
return bindActionCreators({fetchCats: fetchCats}, dispatch)
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)

