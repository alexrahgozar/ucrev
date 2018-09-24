import React from 'react';
import ReactDOM from 'react-dom';
import {MenuItem, NavDropdown, Nav, Button, input, Toggle, form, bsClass, NavItem,  Header, Navbar, Brand, Collapse} from 'react-bootstrap'
// import  UC1 from './uc2.jpg'
// <img classNameName="u-header__navbar-brand-default" src={UC1} alt="Logo"/>

class Navbars extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      info: []
    }
    this.onClickCreateAccout = this.onClickCreateAccout.bind(this);
  }
  onClickCreateAccout() {
    console.log('Create Account Clicked')
  }
  render() {
    return(
      <div>
      <Navbar inverse collapseOnSelect>
<Navbar.Header>
<Navbar.Brand>
  <a href="#brand">UCRev®</a>
</Navbar.Brand>
<Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
<Nav>
  <NavItem eventkey={1} href="#" onClick={this.onClickCreateAccout}>
    Create Account
  </NavItem>
  <NavItem eventkey={2} href="#">
    Link
  </NavItem>
  <NavDropdown eventkey={3} title="Menu" id="basic-nav-dropdown">
    <MenuItem eventkey={3.1}>Under $10</MenuItem>
    <MenuItem eventkey={3.2}>Near by</MenuItem>
    <MenuItem eventkey={3.3}>Happy Hours</MenuItem>
    <MenuItem divider />
    <MenuItem eventkey={3.3}>Separated link</MenuItem>
  </NavDropdown>
</Nav>
<Nav pullRight>
<form className="form-inline mt-2 mt-md-0">
        <input style={{marginTop:"3%"}} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
        <Button style={{marginTop:"3%"}}  bsStyle='primary'  type="submit">Search</Button>
      </form>
</Nav>
</Navbar.Collapse>
</Navbar>;
      </div>
    )
  }
}


export default Navbars
