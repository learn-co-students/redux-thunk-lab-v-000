import React, {Component} from 'react'

export default class CatList extends Component {

  handleLoading = () => {
    if(this.props.loading === true){
      return 'Loading...'
    }
  }

  render() {
    return (
      <div>
      <h3>Cat List </h3>
      {this.handleLoading()}
      {this.props.catPics.map(pic => <img key={pic.id} src={pic.source_url} />)}
      </div>
    )
  }
}
