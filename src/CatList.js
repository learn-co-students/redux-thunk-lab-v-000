import React, { Component } from 'react';

class CatList extends Component {
    renderCatPics = () => this.props.catPics.map((catPic) => <div key={catPic.id} ><img alt="catpic" src={catPic.url} style={{width: 600 + 'px'}}/></div>);

    render() {

        return(
            <div>
                {this.renderCatPics()}
            </div>
        );
    }

  }

export default CatList;