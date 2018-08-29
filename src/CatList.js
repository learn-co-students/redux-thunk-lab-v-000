import React from 'react';

const CatList = (props) => {
    function listCats() {
        return props.catPics.map((catPicture, id) => {
            return(
                <div key={id}>
                    <img src={catPicture.url} alt="cat picture" />
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