import React from 'react';

const CatList = (props) => {
  const catPics = props.catPics.map((catPic, index) => {
    return (
      <li key={index}>
        <img src={catPic.url} role="presentation" />
      </li>
    )
  });

  return (
    <div>
      <ul>
        {catPics}
      </ul>
    </div>
  )
}

export default CatList;
