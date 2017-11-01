import React from 'react';


const CatList = ({ cats }) => {
  debugger
  const renderCats = cats.map(cat =>
    <div key={cat.id}><a href={cat.source_url}><img src={cat.url} alt="" ></img></a></div>
  );
  console.log(cats)

  return (
    <div>
      {renderCats}
    </div>
  );
};

export default CatList
