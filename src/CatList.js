// import React, { Component } from 'react';
import React from 'react';

// write your CatList component here
const CatList = props => {
  return (
    <div>
      {props.catPics.map((cat, index) => 
        <img key={cat.id} src={cat.url} alt={'Cat Pic ' + index} />
      )}
    </div>
  );
};

export default CatList;

// export default class CatList extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.catPics.map((cat, index) => 
//           <img key={cat.id} src={cat.url} alt={'Cat Pic ' + index} />
//         )}
//       </div>
//     );
//   }
// }