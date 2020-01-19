// write your CatList component here
import React from 'react'

class CatList extends React.Component {
    render() {
      const { catPics } = this.props;
      const catPicUrls = catPics.map(image => (
        <img src={`${image.url}`} alt={"Funny cat."} />
      ));
      return <div>{catPicUrls}</div>;
    }
  }
  
  export default CatList;