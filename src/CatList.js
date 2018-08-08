import React from 'react'

export default class CatList extends React.Component{
  render(){
    let cats = this.props.catPics.map(pic => <img src={pic.url} alt={pic.id}/>)
    return(
      <div>
        {cats}
      </div>
    )
  }
}
