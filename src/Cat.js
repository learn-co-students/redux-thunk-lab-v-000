import React, { Component } from 'react';
import { connect } from 'react-redux';


class Cat extends Component {

  
  render() {
    const { img, id } = this.props.cats;

    return (
      <div>
        <li>
          <img src={img} />                    
        </li>
      </div>
    );
  }
};

export default Cat;