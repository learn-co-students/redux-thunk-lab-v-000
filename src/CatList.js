import React from 'react';

export default class CatList extends React.Component {
  renderCats = () => {
    return this.props.catPics.map(c => {
      return <img src={c.url} />
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