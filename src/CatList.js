import React from "react";

function catList({ catPics }) {
  return (
    <div>
      {catPics &&
        catPics.map((catPic, i) => {
          return <img key={i} src={catPic.url} alt="catPic" />;
        })}
    </div>
  );
}
export default catList;
