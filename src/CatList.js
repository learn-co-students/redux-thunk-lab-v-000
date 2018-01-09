import React from "react";

const CatList = (props) => {

  return <div>
      {props.catPics.map((cat, idx) => <img key={idx} src={cat.url} alt="cute kitty"/>)}
    </div>;
}

export default CatList