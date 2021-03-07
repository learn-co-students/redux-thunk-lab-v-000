import React, { Component } from 'react';

class CatList extends Component {

  render() {
    let sources = [];
    this.props.catPics.map(catPic => {
      sources.push(catPic.url)
    })

    let pics = sources.map((source, index) => 
      <li key={index}><img src={source}></img></li>
    )

    return(
      <div>
        <ol>
          {pics}
        </ol>
      </div>
    );
  }

};

export default CatList;