/**
 * Created by Rommel on 2018/11/28.
 */

 import 'jsdom-global/register';
 import 'react-native';
 import React from 'react';
 import {mount} from "enzyme";
 import TestDemo from "../testSrc/TestDemo";
 
 import {configure} from 'enzyme';
 import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 configure({adapter: new Adapter()});

 test('PostArea renders correctly', () => {
     const wrapper = mount(<TestDemo title={"1"} text={"aaa"} />)
     expect(wrapper.find(('text')).exists());
 });
 