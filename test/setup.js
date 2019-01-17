/* eslint-disable no-undef */
import React from 'react';
import sinon from 'sinon';
import {
  mount, render, shallow, configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { createSerializer } from 'enzyme-to-json';
import fetch from 'node-fetch';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
configure({ adapter: new Adapter() });

global.React = React;
global.sinon = sinon;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.fetch = fetch;