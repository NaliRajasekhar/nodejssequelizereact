import React, {useState,useEffect} from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function View() {
    const [user,setUser] = useState({});

    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3001/${id}`)
        .then((resp) => 
            setUser({...resp.data[0]})
        )
    },[id])

    
  return (
    <div>
      <strong>studentName</strong>
      <span>{user.studentName}</span>
      <br/><br/>
      <strong>MobileNo</strong>
      <span>{user.MobileNo}</span>
      <br/><br/>
      <strong>class_ID</strong>
      <span>{user.class_id}</span>
      <br/><br/>
      <strong>password</strong>
      <span>{user.password}</span>
      <br/><br/>
      <Link to = "/">Go Back
    </Link>
    </div>
    
  )
}
