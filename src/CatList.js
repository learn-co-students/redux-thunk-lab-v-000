import React from 'react';

export default class CatList extends React.Component {
  renderCats = () => {
    if (this.props.catPics[0] != undefined) {
      return this.props.catPics[0].map(c => {
        return <img src={c.url} />
      })
    }
  }
  
  render() {
    return(
      <div>
        {this.renderCats()}
      </div>
    )
  }
}