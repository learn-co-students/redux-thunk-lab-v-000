import React from "react";

export default (props) => {
  const { catPics } = props;
  return (
    <div className="cat-list">
      {catPics.map(({ url }, idx) => (
        <img key={idx} src={url} alt="cat" />
      ))}
    </div>
  );
};
