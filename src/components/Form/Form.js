import React, {useEffect, useState} from 'react';
import s from './Form.module.css';
import {uuid} from "uuidv4";

import InputItem from "./InputItem";


const Form = ({
                  name,
                  position,
                  department,
                  organization,
                  email,
                  role,
              }) => {
    const arrayInfo = [
        {label: 'ФИО', value: name, editor: false, id: 1, role},
        {label: 'ДОЛЖНОСТЬ', value: position, editor: false, id: 2, role},
        {label: 'ОТДЕЛ', value: department, editor: false, id: 3, role},
        {label: 'КОМПАНИЯ', value: organization, editor: false, id: 4, role},
        {label: 'E-MAIL', value: email, editor: false, id: 5, role},
    ];

    const [state, setState] = useState(arrayInfo);
        const changeEditor = (e)=>{
            const {target} = e;
            const newItems = state.map(item=>{
                const newItem = {...item};
                if(newItem.id == target.id){
                    newItem.editor = !newItem.editor;
                }
                return newItem
            });
            setState(newItems)
        }

        //
        // const changeInput = (e)=>{
        //         const { target } = e;
        // };
    return (
        <>
            <div className={s.container}>
            {state.map(item => (
                <InputItem key={uuid()} item={item} changeEditor={ changeEditor}/>
            ))}
            </div>
        </>
    );
};

export default Form;
