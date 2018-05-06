import React from 'react';

const CatList = ( {catPics}) => {
    function listCats() {
        return catPics.map( catPic => {
            return (
                <div className="col-lg-12">
                    <div>
                        <img src={catPic.url} />
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            {listCats()}
        </div>
    )
}

export default CatList;