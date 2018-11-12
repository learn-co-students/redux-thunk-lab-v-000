import React, { Component } from 'react';

const CatList = ({catPics}) => {
  const renderCats = catPics.map((catPic, idx) =>
          <img src={catPic.url} alt={idx} key={idx} />
      )
    return (
      <div>
      {renderCats}
      </div>
    )

}

CatList.defaultProps = {
    catPics: []
  }

export default CatList
