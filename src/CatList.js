import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CatList extends Component {
  
  render() {
    console.log("CatList props:" + this.props)
    let pics = this.props.catPics.pictures.map((cat, index) => <img key={index} src={cat.url} />);
    return(
      { pics }
    );
  }
}

function mapStateToProps(state){
  return {catPics: state.catPics}
}
 
export default connect(mapStateToProps)(CatList)
                       