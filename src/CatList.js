import React from 'react'

const CatList = (props) => {
  const catImages = props.catPics.map(pic => {
    return <img src={pic.url} style={{height: '200px'}} alt={"img"}/>
  })

  return (
    <div>
      {catImages}
    </div>
  );
}

export default CatList;
