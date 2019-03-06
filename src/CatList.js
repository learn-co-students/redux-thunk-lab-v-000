import React, {Component} from 'react'

class CatList extends Component {

  render() {
    const renderCatPics = this.props.catPics.map((catPic) => {return <img src={catPic.url}key={catPic.id} alt="" />})
    return <div>{renderCatPics}</div>;
  }
}

export default CatList

// }
