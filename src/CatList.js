import React, { Component } from 'react';
//import { connect } from 'react-redux';

const CatList = ({catPics}) => {
  let pics = catPics.map((cat, index) => {
    return <li key={index}><img src={cat.url}/></li>
    } )
  return (
    <div>
      { pics }
    </div>
  )
}

//function mapStateToProps(state){
//  return {catPics: state.catPics}
//}
 
//export default connect(mapStateToProps)(CatList)
export default CatList;