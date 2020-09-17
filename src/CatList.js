// ***STEP 5: The Presentational Component****
// 1. Build the CatList component. 
// 2. Your container component, App, should render theCatList component. 
// 3. App will pass catPics down to CatList as a prop. 
// 4. CatList should iterate over the cat pics and display each cat pic in an image URL. 
// 5. Remember to use debugger to take a look at the catPics collection and determine which property of 
// each catPic object you will use to populate your <img> tag and render the image.

import React from 'react';

class CatList extends React.Component {
  listCats = () => {
    return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
  }

  render() {
    return (
      <div>
        {this.listCats()}
      </div>
    )
  }
}

export default CatList;