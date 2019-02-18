import React from "react";

function catList({ catPics }) {
  //   const { catList } = this.props;
  //   if (catList) {
  //     const cats = catList.map((cat, i) => {
  //       cat => {
  //         return <img key={i} src="`${cat.url}`" alt="cat image" />;
  //       };
  //     });
  //     return (
  //       <div>
  //         <ul style={{ listStyleType: "none" }}>{cats}</ul>{" "}
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // }
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
