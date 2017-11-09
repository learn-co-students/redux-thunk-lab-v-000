import React from 'react'

const CatList = ({catPics}) => {
  const renderPics = catPics.map(pic => <img src={pic.url}/>)
return(
  <div>
  {renderPics}
  </div>
  )
}

export default CatList
