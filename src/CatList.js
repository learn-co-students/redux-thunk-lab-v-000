import React, { Component } from 'react';
import { connect } from 'react-redux';

const CatList = ({catPics}) => {

  const renderCats = catPics.map(pic =>
      <div><img src={pic.url}/></div>
    )

    return (
      <div>
        {renderCats}
      </div>
    )
}

export default CatList
