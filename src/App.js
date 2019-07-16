import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { type } from 'os';
import { fetchCats } from './actions/catActions';
import { bindActionCreators } from 'redux';
import CatList from './CatList';

class App extends Component {
	componentDidMount() {
		debugger;
		if (this.props.catPics.length === 0) {
			// this.props.cats();
			this.props.fetchCats.fetchCats();
		}
		// debugger;
		// console.log(this.props.catPics);
	}

	render() {
		console.log(this.props);

		return (
			<div className="App">
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">CatBook</a>
						</Navbar.Brand>
					</Navbar.Header>
				</Navbar>
				<CatList catPics={this.props.catPics} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	// debugger;
	return { catPics: state.cats.pictures };
};

const mapDispatchToProps = (dispatch) => {
	return { fetchCats: bindActionCreators(fetchCats, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
