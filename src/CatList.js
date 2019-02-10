import React, {Component} from 'react'

export default class CatList extends Component{


displayCats=()=>{
  return this.props.catPics.map(cat=>{
    return(
      <img src={cat.url}/>
    )
  })
}

render(){

  return(
    <div>
    {this.displayCats()}
    </div>
  )
}

}
