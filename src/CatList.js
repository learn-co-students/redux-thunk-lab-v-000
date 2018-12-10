import React, { Component } from 'react';

class CatList extends Component {
  render (){
    const { loadingCats, fetchCats, catPics } = this.props;
    const allCats = catPics.map(pic =>
      { return (
            <div>
              <img src={pic}/>
            </div>
          )
    });
  }
};

export default CatList;
