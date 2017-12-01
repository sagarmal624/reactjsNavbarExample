import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './AboutUs.css';


const title = 'Sagarandcompany';


function AboutUs(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          This will help to develop true understanding on Data Structures and justified belief on approaches to
          solve questions on different segments and coding practices. You need to be enthusiatic, conscious and
          committed.. rest leave on us.. We will let speak your mind.
        </div>
      </div>
    </div>
  );
}

AboutUs.propTypes = {};
AboutUs.contextTypes = {setTitle: PropTypes.func.isRequired};

export default withStyles(s)(AboutUs);
