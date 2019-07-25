import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import { connect } from 'react-redux'

class catsContainer extends Component {

  render() {
    return (
      <div>
        <catList catPics={this.props.catPics} />
      </div>
    )
  }
}

const mapStateToProps = ({ catPics }) => ({ catPics })

export default connect(mapStateToProps)(catsContainer);