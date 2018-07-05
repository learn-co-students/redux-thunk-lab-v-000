import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class CatList extends React.Component {
  const listCats = this.props.cats.map(cat => {
    <img src={cat} alt="cat Image">
  });

  render () {
    return (
      <div>
        <h1>Cat List</h1>
        {listCats}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cats: state.pictures
  };
}

export default connect(mapStateToProps)(CatList);
