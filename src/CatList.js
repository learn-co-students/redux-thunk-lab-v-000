import React from 'react';

export class CatList extends React.Component {
  render() {
    const displayPics = this.props.catPics.map((catPic, index) => {
      return (
        <li><img key={index} src={catPic.url} role="presentation" /></li>
        )
    })
    return (
      <div>
        <ul>
          { displayPics }
        </ul>
      </div>
      )
  }
}

export default CatList;