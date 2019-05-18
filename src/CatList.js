import React from "react";

const CatList = props => {
  const pictures = props.catPics.map(pic => (
    <img src={pic.url} alt="a random cat" key={pic.id} />
  ));

  return <div>{pictures}</div>;
};

export default CatList;
