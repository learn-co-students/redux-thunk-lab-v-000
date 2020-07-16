// write your CatList component here

import React, { Component } from 'react';

class CatList extends Component {
    render() {
        const catPics = this.props.catPics.map(cat => <img src={cat.url}></img>)
        return (
            <div>
                {catPics}
            </div>  
        )
    }
}

export default CatList;

// export function CatList(props) {
//     const catPics = props.cats.map(cat => <img src={cat.url}></img>)

//     return(
//         <div>
//         {catPics}
//         </div>
//     )

// }
