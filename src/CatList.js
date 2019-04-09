
import React, { Component } from 'react';


class CatList extends Component {
  render() {
      const catPics = this.props.catPics.map((pic,i) => {
          return <img key={i} src={pic.url} />
      })

    return (
       <div className="CatList">
            {catPics}
        </div>
    )
  }
}

export default CatList;
