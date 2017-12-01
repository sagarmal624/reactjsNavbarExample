import React from 'react';
import App from '../components/App';

// Child routes
import home from './home';
import aboutus from './aboutus';

import Header from '../components/Header';

export default [
  {
    path: '/',
    children: [
      home,
      aboutus,
    ],

    async action({next, render, context}) {
      const component = await next();
      if (component === undefined) return component;
      return render(
        <div>
          <Header/>
          <div id="" className="">
            <App context={context}>{component}</App>
          </div>
        </div>
      );
    },
  }];
