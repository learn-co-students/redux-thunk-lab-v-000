import React from 'react';


const CatList = (props) => {
  const renderCats = props.catPics.map(cat =>
  <img src={cat.url} className="thumbnail responsive"/>
)

return (
  <div>
  {renderCats}
  </div>
)
}
export default CatList
