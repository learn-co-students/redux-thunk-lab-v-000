import React, { Component } from 'react';
import { connect } from 'react-redux'

class CatList extends Component {
  
  render(){
    const cats = this.props.catPics.map(cat => <li><img>cat</img></li>)
    
    return(
      <div>
        <ul>
          {cats}
        </ul>
      </div>
    )
  }
}

export default CatList