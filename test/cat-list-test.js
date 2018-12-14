import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import expect, { createSpy, spyOn, isSpy } from 'expect'
import CatList from '../src/CatList'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })


describe('<CatList/>', function () {

  const catPics = [{url: "www.example.com/cat1"}, {url: 'www.example.com/cat2'}]
  
});
