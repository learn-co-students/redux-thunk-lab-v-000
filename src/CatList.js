import React from 'react';

export default class CatList extends React.Component {
  render() {
    const catPics = this.props.catPics.map((catPic,index) => { return <img key={index} src={catPic.url} /> })

    return (
      <div className="CatList">
        { catPics }
      </div>
    );
  }
}
