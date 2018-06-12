import React from 'react'

const CatList = ({catPics})=> {
  if (!!catPics){
    const renderCats = catPics.map((url, index)=> {
            return <img src={url} 
                        key={index}
                        alt={`cat-pic-#${index}`}
                    />
          })
    return <div>{renderCats}</div>
  } else {
    return <div></div>
  }
}

export default CatList