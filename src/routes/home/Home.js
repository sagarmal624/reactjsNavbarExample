import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';


const title = 'Sagarandcompany';


function Home(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          Sagarandcompany aims at introducing you facts, information and skills accquired through experience
          or education, the theoretical or practical understanding of Data Structures and Algorithm / programming and
          coding.This will help to develop true understanding on Data Structures and justified belief on approaches to
          solve questions on different segments and coding practices. You need to be enthusiatic, conscious and
          committed.. rest leave on us.. We will let speak your mind.
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = {setTitle: PropTypes.func.isRequired};

export default withStyles(s)(Home);
