import React from 'react'

export default class CatList extends React.Component{
  renderPics = () => {
    return this.props.catPics.map(p => {
      return (<img src={p} alt=''/>)
    })
  }
  render(){
    return(
      <ul>
        CatList
        {this.renderPics()}
      </ul>
    )
  }
}
