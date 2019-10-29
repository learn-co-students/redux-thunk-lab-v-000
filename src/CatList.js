import React from "react";

const CatList = props => {
  const AllCats = props.catPics.map(cat => {
    return <img key={cat.id} src={cat.url} />;
  });
  return <div>{AllCats}</div>;
};
export default CatList;
