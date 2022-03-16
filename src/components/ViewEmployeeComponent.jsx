import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }
  render() {
    return (
      <div class="list text-center">
        <h1>Emloyee View</h1>
        <div className="card">
          <h4>First Name</h4>
          <div>{this.state.employee.firstName}</div>
          <h4>Last Name</h4>
          <div>{this.state.employee.lastName}</div>
          <h4>Email </h4>
          <div>{this.state.employee.emailId}</div>
        </div>
      </div>
    );
  }
}
