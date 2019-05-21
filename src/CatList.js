import React, {Component} from 'react';


class CatList extends Component{
  render(){
    const catList = this.props.catPics.map(cat => { return <img src={cat.url} key={cat.id} alt={cat.source_url}/> })

    return (
      <ul>
      {catList}
      </ul>
    )
  }
}

export default CatList
