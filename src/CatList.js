import React from 'react';

const CatList = (props) => {

  console.log("catlist props are");
  console.log(props);

  return (
    <div>
      {
        props.catPics !== [] ? props.catPics.map((cat, index)=> {
          return <img key={index} src={cat.url} />
        }) : ''
      }
    </div>
  )
}
//
// const mapStateToProps = (state) => {
//   return { cats: state.cats }
// }
//
// export default connect(mapStateToProps)(CatList);
//
// // export default ConnectedCatList

export default CatList;
