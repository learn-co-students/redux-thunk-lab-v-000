import React, { Component } from 'react'


class CatList extends Component {

    render() {
        const { catPics } = this.props
        return (
            <div>
                {catPics.map(pic => {
                    return (
                        <img key={pic.id} style={{width: 250 + 'px'}} src={pic.url} />
                    )
                })}
            </div>
        )
    }
}

export default CatList;