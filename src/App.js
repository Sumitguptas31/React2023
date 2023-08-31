import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [form, setform] = useState({})
  const HandleForm = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  function HandleSubmit(e) {
    e.preventDefault();
    try{
    axios.post('http://localhost:7000/demo', {
      headers: {
        'Content-Type': 'application/json',
      },
      username:form.username,
      password:form.password
    })
      .then((response) => {
        console.log("response",response);
      }, (error) => {
        console.log("error",error);
      });
  }
  catch(error){
    console.log(error)
  }
  }
  return (
    <div className="App">
      <form onSubmit={HandleSubmit}>
        <h1>{JSON.stringify(form)}</h1>
        <span>username</span>
        <input type="text" name="username" onChange={HandleForm}></input>
        <span>password</span>
        <input type="text" name="password" onChange={HandleForm}></input>
        <input type="submit"></input>

      </form>

    </div>
  );
}

export default App;
