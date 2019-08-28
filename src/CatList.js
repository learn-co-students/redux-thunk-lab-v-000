import React, { Component } from 'react';
import { connect } from 'react-redux'

class CatList extends Component {
  
  render(){
    const cats = this.props.catPics.map(cat => <li><img>cat</img></li>)
    
    return(
      <ul>
        {cats}
      </ul>
      
    )
  }
}

export default CatList