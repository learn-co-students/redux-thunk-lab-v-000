import React from 'react';

class CatList extends React.Component {
    listOfCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id}/>)
    }

    render() {
        return (
            <div>
                {this.listOfCats()}
            </div>
        )
    }
}


export default CatList;