import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark ">
            <div>
              <Link to="/employees" >Emloyees</Link>
              <Link to="/add-employee">Add new employee</Link>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
