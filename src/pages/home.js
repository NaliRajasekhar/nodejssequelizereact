import React, {useState,useEffect} from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
    const[data, setData] = useState([]);

    const loadData = async() => {
        const response = await axios.get("http://localhost:3001/allStudents");
        setData(response.data);
    };

    useEffect(() => {
        loadData(); 
    },[])

    const deleteContact = (id) => {
        if(window.confirm("Are you sure that you wanted to delete the student")) {
         axios.delete(`http://localhost:3001/${id}`);
            setTimeout(() => loadData(), 500);
       
        }
        
    }

  return (
    <div>
        <Link to='/addStudent'>
            <button>AddStudent</button>
        </Link>
      <table>
        <thead>
            <tr>
                <th>sno</th>
                <th>studentName</th>
                <th>mobileNo</th>
                <th>class_ID</th>
                <th>password</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item,index) => {
                return(
                    <tr key = {item.id}>
                        <th scope = "row">{index+1}</th>
                        <td>{item.studentName}</td>
                        <td>{item.mobileNo}</td>
                        <td>{item.class_ID}</td>
                        <td>{item.password}</td>
                        <td>
                            <Link to= {`/update/${item.id}`}>
                            <button>Edit</button>
                            </Link>
                            <button onClick={() => deleteContact(item.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}
