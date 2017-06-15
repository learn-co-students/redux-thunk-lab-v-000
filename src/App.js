import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CatList from './CatList';
import fetchCats from './actions/catActions'
class App extends Component {   

    componentDidMount(){
        this.props.fetchCats();
    }

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
                <CatList catPics={this.props.catPics}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        catPics: state.catPics,
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchCats: fetchCats
    }, dispatch);
}
const connectedApp = connect(mapStateToProps,mapDispatchToProps)(App)
export default connectedApp