import React from 'react'

const CatList = (props) => {
  function listCats() {
debugger
    return props.catPics.map((catPic, idx) => {
      return (
        <div key={idx} className="col-lg-12">

            <img src={catPic.url} className="thumbnail responsive" alt="catpic"/>

        </div>
      )
    })
  }
  return (
    <div>
      {listCats()}
    </div>
  )
}

export default CatList
