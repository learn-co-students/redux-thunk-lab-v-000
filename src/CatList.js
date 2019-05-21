import React, { Component } from "react";

const CatList = props => {
  const cats = props.catPics.map(el => <img src={el.url} key={el.id} />);
  return <div>{cats}</div>;
};

export default CatList;
