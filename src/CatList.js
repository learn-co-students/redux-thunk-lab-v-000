// import React, { Component } from "react";

// class CatList extends Component {
//   cats = () =>
//     this.props.catPics.map(cat => {
//       return <img key={cat.id} src={cat.url} />;
//     });
//   render() {
//     return <div>{this.cats()}</div>;
//   }
// }

// export default CatList;

import React from "react";

const CatList = ({ catPics }) => {
  return (
    <div>
      {catPics.map((cat, index) => (
        <img key={index} alt="cat" src={cat.url} />
      ))}
    </div>
  );
};

export default CatList;
