import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployeeById = this.deleteEmployeeById.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((resp) => {
      this.setState({ employees: resp.data });

    });
  }

  addEmployee() {
    this.props.history.push("/add-employee");
  }
  editEmployee(id) {
    this.props.history.push("/update-employee/" + id);
  }

  deleteEmployeeById(employeeId){
    EmployeeService.deleteEmployeeById(employeeId).then((resp)=>{
      this.setState({employees:this.state.employees.filter(employee => employee.id !== employeeId)});
    })
  }

  viewEmployee(employeeId){
      this.props.history.push("/view-employee/" + employeeId);
  }

  
  render() {
    return (
      <div className="list">
        <h2 className="text-center">Employees List</h2>
        <div >
          <button className="btn btn-primary mb-3" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="list_scroll">
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button onClick={()=> this.editEmployee(employee.id)} className="btn btn-info me-2">Edit</button>
                    <button onClick={()=> this.deleteEmployeeById(employee.id)} className="me-2 btn btn-danger">Delete</button>
                    <button onClick={()=> this.viewEmployee(employee.id)} className="btn btn-primary ">View</button>
                  
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
