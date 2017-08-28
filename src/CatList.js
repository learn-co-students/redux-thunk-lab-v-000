import React from 'react'

const CatList = ({catPics}) => {
  const showCats = catPics.map((cat,index) =>{
     return <img src={cat.url} alt="" key={index} />;
    }
  )

  return(
    <div>
      {showCats}
    </div>
  )
}



export default CatList;