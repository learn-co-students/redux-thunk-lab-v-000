import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
/*
import { Thumbnail } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/lib/Col';
*/



 const CatList = ({ catPics }) => {

      const renderCats = catPics.map(catPic =>

                   <img
                      key={catPic.id}
                      style={{ height: '220px', width: 'auto', margin: '5px' }}
                      src={catPic.url}
                      alt="catpic"
                   />


      )




       return (
         <Grid>
            <Row>
              {renderCats}
            </Row>
        </Grid>
       )


}


export default CatList
