import React from 'react';

const CatList = (props) => {
  function catUrls() {
    return props.catPics.map(catPic => {
      return (
        <div>
          <img src={catPic.url} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}}/>
        </div>
      )
    })
  }
  return (
    <div>
      {catUrls()}
    </div>
  )
}

export default CatList
