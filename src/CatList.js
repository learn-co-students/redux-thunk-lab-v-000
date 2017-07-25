import React from 'react' // so that jsx works

const CatList = (props) => {
    function listCats() {
        return props.catPics.map(catPic => {
            return (
                <div className="col-lg-6 col-lg-offset-3 well">
                    <img src={catPic.url} className="thumbnail responsive"/>
                </div>
            )
        });
    }
    return (
        <div>
            {listCats}
        </div>
    );
}

export default CatList;