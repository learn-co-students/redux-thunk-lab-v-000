import React, { Component} from 'react'
import CatList from '../CatList'
import { connect } from 'react-redux'

class CatsContainer extends Component {

  render(){
    return (
      <div>
        <CatList
          loadingCats={this.props.loadingCats}
          fetchCats={this.props.fetchCats}
          catPics={this.props.catPics}
        />
      </div>
    );
  }

}

const mapStateToProps = state => ({catPics: state.cats })

const mapDispatchToProps = dispatch => ({
  loadingCats: loading => dispatch({type: 'LOADING_CATS', loading}),
  fetchCats: cats => dispatch({type: 'FETCH_CATS', cats})
})

export default connect(mapStateToProps, mapDispatchToProps)(CatsContainer)
