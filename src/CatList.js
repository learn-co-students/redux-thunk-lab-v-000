import React from 'react';


const CatList = ({ catPics }) =>{
    const catList = catPics.map(cat => <img src={cat.url} key={cat.id} alt={cat.source_url}/> )
    return (
      <ul>
      {catList}
      </ul>
    )
}

export default CatList
