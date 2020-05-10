import React from 'react';

const CatList = ({ catPics }) => {
    const renderCats = catPics.map(({id, url}) => <img key={id} src={url} alt={id}/> )
    return (
        <div>
            <ul>
                {renderCats}
            </ul>
        </div>
    )
}

export default CatList;