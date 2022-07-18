import React, { Component } from 'react';
import axios from 'axios';

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentName: '',
      mobileNo: '',
      classID:'',
      password:'',
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { studentName, mobileNo, classID, password } = this.state;

    const student = {
        studentName,
        mobileNo,
        classID,
        password,
    };
    console.log(student);
    axios
      .post('http://localhost:3001/create', student)
      .then(() => console.log('Student Created'))
      .catch(err => {
        console.error(err);
      });
      axios.put('http://localhost:3001/:id', student)
      .then((response) => {
      alert('updated');
    });
      axios.put('http://localhost:3001/:id', student)
      .then((response) => {
      alert('updated');
    });
  };

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="studentName"
                placeholder="student Name"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="mobileNo"
                placeholder="Mobile no"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="classID"
                placeholder="classID"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="password"
                placeholder="password"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }}>
              <button className="btn btn-success" type="submit">
                Create
              </button>
              <button className="btn btn-success" onClick={this.editStudent}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Student;