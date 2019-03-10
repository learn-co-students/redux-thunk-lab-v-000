import React from 'react'

const CatList = ({ catPics }) => {
  return(
    <React.Fragment>
      {
        catPics.map(pic => (
          <img src={pic.url} />
        ))
      }
    </React.Fragment>
  )
}

export default CatList