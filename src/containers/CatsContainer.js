import React, { Component} from 'react'
import CatList from '../CatList'
import { connect } from 'react-redux'
import { fetchCats } from '../actions/catActions'

class CatsContainer extends Component {

  componentDidMount(){
    this.props.fetchCats();
  }

  render(){
    return (
      <div>
        <CatList
          catPics={this.props.catPics || []}
        />
      </div>
    );
  }

}

const mapStateToProps = state => ({ catPics: state.pictures })

const mapDispatchToProps = dispatch => ({
  loadingCats: loading => dispatch({type: 'LOADING_CATS', loading}),
  fetchCats: () => fetchCats()
})

export default connect(mapStateToProps, mapDispatchToProps)(CatsContainer)
