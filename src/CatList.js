// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

    displayCats = () => {
      return this.props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt={catPic.id} />)

    }
  
    render() {
  
      return (
        <div>
          
             {this.displayCats()}
         
        </div>
      );
    }
  };
  
  export default CatList;