import React from 'React'

const CatList = (props) => {

  const catImages = props.catPics.map((cat, index) => {
    return <img src={cat.url} key={index} alt="cat" />
  });

  return (
    <div>
      {catImages}
    </div>
  )
}

export default CatList;
