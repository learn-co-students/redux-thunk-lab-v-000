import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const CatList = ({ catPics }) => {
  const listCats = catPics.map(cat => {
    return <img src={cat.url} alt="cat Image" />
  });


    return (
      <div>
        <h1>Cat List</h1>
        {listCats}
      </div>
    );
};

export default CatList
