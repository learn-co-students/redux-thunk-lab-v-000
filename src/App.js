import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions.js';

class App extends Component {

	componentDidMount() {
		if (this.props.catPics.length === 0) {
			console.log('in component did mount');
			this.props.fetchCats();
		}
	}
	render() {
    console.log(this.props)
		return (
			<div className="App">
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="CatBook">CatBook</a>
						</Navbar.Brand>
					</Navbar.Header>
				</Navbar>
				<CatList catPics={this.props.catPics} />
			</div>
		);
	}
}

const mapStateToProps = ({cats}) => ({ catPics: cats.pictures })

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: fetchCats
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)
