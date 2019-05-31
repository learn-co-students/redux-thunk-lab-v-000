import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import expect, { createSpy, spyOn, isSpy } from 'expect'
import CatList from '../src/CatList'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })


describe('<CatList/>', function () {

  const catPictures = [{url: "www.example.com/cat1"}, {url: 'www.example.com/cat2'}]
  it('should display the cat pics wrapped in <img> tags', function () {
    const wrapper = shallow(<CatList catPictures={catPictures}/>);
    expect(wrapper.find('img').length).toEqual(2);
  });

  it('should have props catPictures', function () {
    const wrapper = shallow(<CatList catPictures={catPictures}/>);
    expect(wrapper.props().catPictures).toBe.defined;
  });
});
