// write your CatList component here


// import React from 'React';
import React, {Component} from 'React';


// this.props in CatList................ {
//   catPics: [
//     { id: 1, url: 'www.example.com/cat1' },
//     { id: 2, url: 'www.example.com/cat2' }
//   ]
// }
// this.props.catPics in CatList................ [
//   { id: 1, url: 'www.example.com/cat1' },
//   { id: 2, url: 'www.example.com/cat2' }
// ]

// {this.props.catPics.map((item, index) => (<img src={item.url} />))}

class CatList extends React.Component {
  render(){
    // console.log("this.props in CatList................", this.props)
    // console.log("this.props.catPics in CatList................", this.props.catPics)

    // const catImages =

    return(
      <div>
        {this.props.catPics.map((item, index) => (<img src={item.url} />))}
      </div>
    )
  }
};

export default CatList;


// notes/approaches

// 1
// making a const variable with the images, and then mapping over them.
// notes- have to learn how to iterate over an object with map. what do the keys/index
// things mean exactly





//
// const CatList = (props) => {
//   <div> this.props.map(item => {
//     <img>item </img>
//   }) </div>
// }
// <img item />
//
// <div> this.props.catPics.map(item => {
//   <img item />
// }) </div>
//
// export default CatList;
