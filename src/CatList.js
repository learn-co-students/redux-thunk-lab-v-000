import React from 'react'

const CatList = ({catPics}) => {


    const cats = catPics.map(cat =>
      <img src={cat.url} role='presentation' />
    )
    return(
      <div>
        {cats}
      </div>
    )
}

export default CatList
