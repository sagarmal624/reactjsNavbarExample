import React from 'react';
import AboutUs from './AboutUs';
// import fetch from '../../core/fetch';

export default {

  path: '/aboutus',

  async action() {
    return <AboutUs/>;
  },
};
