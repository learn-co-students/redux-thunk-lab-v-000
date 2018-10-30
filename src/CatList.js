import React from 'react';

 export default class CatList extends React.Component {
  renderCats = () => {
    return this.props.catPics.map(cat => {
      return <img src={cat.url} />
    })
  }

  render() {
    return(
      <div>
        {this.renderCats()}
      </div>
    )
  }
}
