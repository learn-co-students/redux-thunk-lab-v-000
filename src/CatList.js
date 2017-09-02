import React from 'react';
//import {connect} from 'react-redux';


const CatList = (props) => {
  console.log("PROPS ARE...", props)
return( <div>
    {props.catPics.map( cat =>
      <img key={cat.id} src={cat.url} alt="cat"/>
    )}
  </div>)
}

export default CatList

// class CatList extends React.Component {
//   render(){
//     // debugger
//     const cats = (this.props.catPics ? this.props.catPics.map( cat =>
//         <img key={cat.id} src={`${cat.url}`} alt="cat"/>
//     ) : []);
//
//     return(
//       <div>
//         {cats}
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state) => {
//   // debugger
//   return {
//     catPics: state.cats
//   }
// }
//
// export default connect(mapStateToProps)(CatList)
