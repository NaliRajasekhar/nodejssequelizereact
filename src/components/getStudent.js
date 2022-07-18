import React from 'react';
import axios from 'axios';

export default class GetStudents extends React.Component {
  state = {
    students: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/allStudents')
      .then(res => {
        const students = res.data;
        this.setState({ students });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.students
            .map(student =>
              <li key={student.id}>{student.name}</li>
            )
        }
      </ul>

      
    )
  }
}