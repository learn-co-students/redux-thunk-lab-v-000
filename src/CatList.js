import React from 'react';

const CatList = (props) => {
    function listCats() {
        return props.catPics.map((pic, i) => {
            return (
                <div key={i}>
                    <img src={pic.url}/>
                </div>
            )
        }
        
        )
    }
    return (
        <div>
            {listCats()}
        </div>
    )
}

export default CatList