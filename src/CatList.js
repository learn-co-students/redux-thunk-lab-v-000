import React from 'react';

const CatList = function(props) {
    let catPics = this.props.catpics.map((pic) => 
            <img>{pic}</img>
        )
    return <div> cat 1 </div>;
};

export default CatList;