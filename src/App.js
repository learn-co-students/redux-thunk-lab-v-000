import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

class App extends Component {
	componentDidMount() {}
	render() {
		return (
			<div className="App">
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">CatBook</a>
						</Navbar.Brand>
					</Navbar.Header>
				</Navbar>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { cats: state.cats };
};

export default connect(mapStateToProps)(App);
// export default App;
