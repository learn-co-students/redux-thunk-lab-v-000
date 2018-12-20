import React, { Component } from 'react';

class CatList extends Component { 
   
    renderCatPics = () => {
        return this.props.catPics.map(pic =>
        <div><img src={pic.url}/></div>)
    }

    render() {
        console.log(this.props.catPics)
      return (
        <div className="CatList">
          {this.renderCatPics()}
        </div>
      );
    }
  }

  export default CatList