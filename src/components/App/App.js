import React from 'react';
import s from './App.module.css'
import Form from "../Form/Form";

function App() {
    const userData = [
        {name: 'Ivan'},
        {position: 'employee'},
        {department: 3},
        {organization: 5},
        {email: 'ivanov@gmail.com'},
        {role: 'administrator'}
    ]

    console.log(userData[0].name);

    return (
        <div className={s.container}>
            <h1>Работа с формами</h1>
            <Form
                name={userData[0].name}
                position={userData[1].position}
                department={userData[2].department}
                organization={userData[3].organization}
                email={userData[4].email}
                role={userData[5].role}
            />
        </div>
    );
}

export default App;
