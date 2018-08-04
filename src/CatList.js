import React from 'react';

export default class CatList extends React.Component {
  render() {
    return (
      <div className="CatList">
        {this.props.catPics.map( (cat, index) => <img src={cat} alt={"cat"} key={index}/> )}
      </div>
    );
  }
}
