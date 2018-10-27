import { Route, Link } from "react-router-dom";
import React, { lazy, Component, Suspense } from 'react';

/* eslint-disable import/first */
const routeA = lazy(() => import('./route-a/component'));
/* eslint-disable import/first */
const routeB = lazy(() => import('./route-b/component'));

import './dashboard.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/">Funny world</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/routeA">Route A</Link>
              </NavItem>
              <NavItem>
                <Link to="/routeB">Route B</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/routeA" component={routeA} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/routeB" component={routeB} />
        </Suspense>
      </div>
    );
  }
}

export default App;
