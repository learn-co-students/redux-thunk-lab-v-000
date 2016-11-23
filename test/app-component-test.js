import React from 'react'
import { shallow, mount} from 'enzyme'
import expect, { createSpy, spyOn, isSpy } from 'expect'
import ReactTestUtils from 'react-addons-test-utils'
import ReduxPromise from 'redux-promise'
import App from '../src/App'
import CatList from '../src/CatList'
import sinon from 'sinon'
import configureMockStore from 'redux-mock-store'


import configureStore from 'redux-mock-store';
import { Provider, connect} from 'react-redux';
import rootReducer from '../src/reducers/index'

const images = [{url: "www.example.com/cat1"}, {url: 'www.example.com/cat2'}]
function setup() {
  const props = {
    catPics: images
  }
  const mockStore = configureStore([]);
  const store = mockStore();
  const wrapper = shallow(<App store={store}/>)
  return {
    wrapper
  }
}

function setUpMount() {
  const middlewares = [ ReduxPromise ]
  const mockStore = configureMockStore(rootReducer, middlewares)({cats: []})

  console.log('before mount in test')
  const component = mount(<Provider store={mockStore}><App /></Provider>)
  return {
    mockStore,
    component
  }
}

describe('<App/>', function () {

  it('should render the CatList component as a child', function () {
    const { wrapper } = setup()
    expect(wrapper.shallow().find('CatList').length).toEqual(1)
  });


  it('should be connected to the store via the `connect` function', function() {
    const { wrapper } = setup()
    expect(wrapper.unrendered.type.displayName).toEqual('Connect(App)')
  })

  it('should use the componentDidMount lifecycle method to fetchCats', function() {
    sinon.spy(App.prototype, 'componentDidMount');
    const {component, mockStore} = setUpMount()
    expect(App.prototype.componentDidMount.calledOnce).toEqual(true);
  })

 
});
