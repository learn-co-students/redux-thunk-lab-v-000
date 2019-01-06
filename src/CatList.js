import React, { Component } from 'react';

 
class CatList extends Component {
    constructor(props){
        super(props);
    }

  renderCats() {
       return this.props.catPics.map((cat) => <img key={cat.id} src={cat.url} />)
   }
    
   render(){
       return (
           <div>
               <ul>
                   { this.renderCats() } 
               </ul>
       
           </div>
       );
   }
}

export default CatList;
