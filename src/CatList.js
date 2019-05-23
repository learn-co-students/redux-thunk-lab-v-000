import React from "react";

const CatList = props => {
  // debugger;
  const catImages = props.catPics.map((cat, index) => {
    return <img key={index} src={cat.url} alt={cat.url} />;
  });

  return (
    <div>
      <h3>Cat List</h3>
      {catImages}
    </div>
  );
};

export default CatList;
