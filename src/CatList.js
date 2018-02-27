import React from 'react';
import App from './App';

class CatList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.catPics.map((pic, index) => (
          <img src={pic.url} key={index} />
        ))}
      </div>
    )
  }
}

export default CatList;
