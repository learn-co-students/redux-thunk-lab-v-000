import React from "react";

export default ({ catPics }) => (
  <div className="cats-list">
      {catPics.map(cat => (
        <img src={cat.url} />
      ))}
  </div>
);
