import React from 'react' 

function CatList ({catPics}) {

    return (
        <div className='catlist'>
            {catPics && catPics.map((cat,i) => <img key={cat.id} src={cat.url}></img>)}
        </div>
    );
}

export default CatList;