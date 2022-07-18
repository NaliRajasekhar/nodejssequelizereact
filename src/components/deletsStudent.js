import React from 'react';  
    
import axios from 'axios';  
    
export default class DeleteStudent extends React.Component {  
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
    
  deleteRow(id, e){  
    axios.delete('http://localhost:3001/:id')  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
        const students = this.state.students.filter(item => item.id !== id);  
        this.setState({ students });  
      })  
    
  }  
    
  render() {  
    return (  
      <div>
    
              {this.state.students.map((student) => (  
                <div> 
                  <td>{student.id}</td>  
                    <button className="btn btn-danger" onClick={(e) =>this.deleteRow(student.id, e)}>Delete</button>  
                </div>
              ))}  
      </div>  
    )  
  }  
}  