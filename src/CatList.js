import React from 'react';
const CatList = (props) => {
     return(
       <div>
         { props.catPics.map(cat => <div><img alt={cat.source_url} key={cat.id} url={cat.url}/></div>)}
       </div>
     );

};

export default CatList
