import React from 'react'

const CatList = (props) => {
  const catImages = props.catPics.map((catPic, i) => {
    return (
      <div key={i} className="col-lg-12">
        <div className="col-lg-6 col-lg-offset-3 well">
          <img src={catPic.url} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}} alt="cat"/>
        </div>
      </div>
    )
  })
  console.log("CatList rendering")
  return (
    <div>
      {catImages}
    </div>
  )
}

export default CatList
