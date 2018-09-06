import React from 'react';

class CatList extends React.Component {
  render() {
    const cats = this.props.catPics.map(cat => <div key={cat.id}><img src={cat.url} /></div>)
    return (
      <div>{cats}</div>
    )
  }
}

export default CatList
