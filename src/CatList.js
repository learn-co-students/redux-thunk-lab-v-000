// first attempt 5/29/18
// import React from 'react';
//
// const CatList = (props) => {
//   const cats = props.catPics.map((c,i) => <img src={c.url} alt="cat pic"/>)
//
//   return(
//     <div>
//       <h3>This is the CatList Component</h3>
//       {cats}
//     </div>
//   )
// }
//
// export default CatList;

// second attempt 11/18/18
import React from 'react';

const CatList = ({ catPics }) => {
  const cats = catPics.map((c,i) => <img src={c.url} alt="cat pic" />)

  return (
    <div className="cat-list">
      <h3>This is the CatList Component</h3>
      {cats}
    </div>
  )
}

export default CatList;
