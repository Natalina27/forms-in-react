import React from 'react';
import s from './App.module.css'
import Form from "../Form/Form";

function App() {
    const userData = [
        {name : 'Ivan'},
        {position: 'employee'},
        {department: 3},
        {organization: 5},
        {email: 'ivanov@gmail.com'},
        {role: 'administrator'}
        ]
  return (
        <div className={s.container}>
            <h1>Работа с формами</h1>
            <Form userData={userData}/>
        </div>
  );
}

export default App;
