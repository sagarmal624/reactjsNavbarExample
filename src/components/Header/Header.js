import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import history from '../../core/history';
import $ from "jquery";

const logo = require('./logo.png');

function Header() {
  return (
    <div id="wrapper" className="content">
      <Navbar fluid={true} style={{margin: 0}}>
        <Brand>
            <span>
              <img src={logo} alt="Start React" title="Start React"/>
              <span>&nbsp;                <a href="https://sagarandcompany.com/" title="Sagarandcompany" rel="home">Sagarandcompany</a>
  </span>
                <button type="button" className="navbar-toggle" onClick={() => {
                  toggleMenu();
                }} style={{position: 'absolute', right: 0, top: 0}}>
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
            </span>
        </Brand>
        <ul className="nav navbar-top-links navbar-left">

          <MenuItem eventKey="1" onClick={(event) => {
            history.push('/');
          }}>
            <span>Home</span>
          </MenuItem>
          <MenuItem eventKey="4" onClick={(event) => {
            history.push('/aboutus');
          }}>
            <span>About us</span>
          </MenuItem>

          <NavDropdown title='Data Structure' id='datastructure'>
            <MenuItem eventKey="1">
              <span> <i className="fa fa-user fa-fw"></i> Array </span>
            </MenuItem>
            <MenuItem eventKey="2">
              <span> <i className="fa fa-user fa-fw"></i> Linkedlist </span>
            </MenuItem>
            <MenuItem eventKey="3">
              <span> <i className="fa fa-user fa-fw"></i> Stack </span>
            </MenuItem>
            <MenuItem eventKey="4">
              <span> <i className="fa fa-user fa-fw"></i> Queue </span>
            </MenuItem>
            <MenuItem eventKey="5">
              <span> <i className="fa fa-user fa-fw"></i> Tree </span>
            </MenuItem>

          </NavDropdown>

        </ul>
        <ul className="nav navbar-top-links navbar-right">


          <NavDropdown title={<i className="fa fa-user fa-fw"></i>} id='navDropdown4'>
            <MenuItem eventKey="1">
              <span> <i className="fa fa-user fa-fw"></i> User Profile </span>
            </MenuItem>
            <MenuItem eventKey="2">
              <span><i className="fa fa-gear fa-fw"></i> Settings </span>
            </MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4" onClick={(event) => {
              history.push('/login');
            }}>
              <span> <i className="fa fa-sign-out fa-fw"/> Logout </span>
            </MenuItem>
          </NavDropdown>

        </ul>

      </Navbar>
    </div>
  );
}

function toggleMenu() {
  if ($(".navbar-collapse").hasClass('collapse')) {
    $(".navbar-collapse").removeClass('collapse');
  }
  else {
    $(".navbar-collapse").addClass('collapse');
  }
}

export default Header;
