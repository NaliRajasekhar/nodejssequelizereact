import React, {useState,useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const initialState = {
    studentName: "",
    mobileNo: "",
    class_ID: "",
    password: "",
}
const Add = () => {
    const [state, setState] = useState(initialState);

    const {studentName,mobileNo,class_ID,password} = state;

    const history = useNavigate();
    
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
        axios.get(`http://localhost:3001/${id}`)
        .then((resp) => 
            setState({...resp.data[0]})
        )
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!id){
            axios.post("http://localhost:3001/create", {
            studentName,
            mobileNo,
            class_ID,
            password,
        }).then(() => {
            setState({studentName: "",mobileNo:"", class_ID:"",password:""})
        }).catch((err) => {
            console.log(err);
        });
        }else{
            axios.put(`http://localhost:3001/${id}`, {
            studentName,
            mobileNo,
            class_ID,
            password,
        }).then(() => {
            setState({studentName: "",mobileNo:"", class_ID:"",password:""})
        }).catch((err) => {
            console.log(err);
        });
        }
        
        setTimeout(() =>  history.push("/"), 500)
    }

    const handleInputChange = (e) => {
        
        const {name, value} = e.target;
        setState({...state, [name]:value});
    }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
         <label htmlFor= "name">studentName</label>
         <input type="text" id = "name" name = "studentName" placeholder="Enter YOur Name .." value = {studentName || " "} onChange = {handleInputChange}/><br/><br/>
         <label htmlFor= "name">MobileNO</label>
         <input type="text" id = "mobileNo" name = "mobileNo" placeholder="Enter YOur mobileNo .." value = {mobileNo || " "} onChange = {handleInputChange}/><br/><br/>
         <label htmlFor= "name">class_ID</label>
         <input type="text" id = "class_ID" name = "class_ID" placeholder="Enter YOur class_ID .." value = {class_ID || " "} onChange = {handleInputChange}/><br/><br/>
         <label htmlFor= "name">password</label>
         <input type="text" id = "password" name = "password" placeholder="Enter YOur password .." value = {password || " "} onChange = {handleInputChange}/><br/><br/>
      <input type = "submit" value ={id ? "update" : "save"}/><br/><br/>
      <Link to = "/">
        <input type="button" value = "Go Back" />
      </Link>
      </form>
    </div>
  )
}

export default Add;
