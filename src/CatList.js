import React from 'react';

const CatList = ({ catPics }) => {

    const imgDivs = catPics.map(pic => {
        return (
            <div key={pic.id} className="pic">
              <img src={pic.url} alt="cat_pic"/>
            </div>
        );
    });

    return(
        <div>
            <p>WOW</p>
            {imgDivs}
        </div>    
    );
}

export default CatList;