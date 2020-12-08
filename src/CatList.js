import React from 'react'

const CatList = ({ catPics }) => {

   const listCats = catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
       
        return (
          <div>
            {listCats}
          </div>
        )
}

export default CatList

