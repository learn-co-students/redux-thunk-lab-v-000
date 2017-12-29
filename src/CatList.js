import React from 'react'

const CatList = (props) => {
  const cats = props.catPics.map ((catPic, index) => {
    return (
      <div className="col-lg-12">
        <div className="col-lg-6 col-lg-offset-3 well">
          <img src={catPic.url} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}} key={index}/>
        </div>
      </div>
    )
  }) 
  return (
   <div>
      <h5 className="lead">All Cats</h5>
      {cats}
    </div>
  )
}

export default CatList