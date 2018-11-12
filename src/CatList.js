import React from 'react'

const CatList = ({catPics}) =>{
  const renderCats = () => {
    catPics.map(cat => <img src="#" alt=''/>)
  }
  return(
    <div>
      {renderCats()}
    </div>
  )
}
export default CatList
