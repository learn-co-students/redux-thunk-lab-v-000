import React, { Component } from 'react';
// import { connect } from 'react-redux';


class CatList extends Component {
  render() {

        console.log("CATlist Props:", this.props.catPics)

        const catList = this.props.catPics.map((pic,index) => {
          return <li key={index} > <img src={pic.url} alt={pic.source_url} height="84" width="84" /> </li>
              })

              console.log("catsList:", catList)

        return(
                <ul>
                   {catList}
                </ul>
              );
    }
};


// const mapStateToProps = (state) =>{
//   return { pictures: state.pictures }
// }


// export default connect(mapStateToProps)(CatList)
export default CatList
// ADD CONNECT TO CLICK FOR fetching the cats
// USE PASSED PROPS FROM APP.JS ?
