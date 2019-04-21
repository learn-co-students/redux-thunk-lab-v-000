import React, { Component } from 'react';

class CatList extends Component {   
  
    render() {
        const {catPics} = this.props;

        const catsList = catPics.map((cat, index) => {
            return <img key={index} src={cat.url} />
        })
      return (
        <div>
            {catsList}
        </div>
      );
    }
  }
  
  export default CatList