import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from '../actions/catActions'

class App extends Component {  
	handleOnClick() {
    this.props.fetchCats()
  } 
  
  render() {
		const cats = this.props.cats.map(cat => <li key={cat.id}>{cat.name}</li>);

    return (
      <div>
        <h1>CatBook</h1>
        <button onClick={(event) = this.handleOnClick(event)} />
        {cats}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchCats: () => dispatch(fetchCats()) }
}
 
function mapStateToProps(state){
  return {cats: state.cats}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App)

