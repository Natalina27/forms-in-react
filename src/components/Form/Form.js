import React from 'react';
import s from './Form.module.css';
import {uuid} from "uuidv4";


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

    console.log('name', name);


    return (
        <>
            <div className={s.container}>
            {arrayInfo.map(item => (
                <div key={item.id} className={s.infoContainer}>
                    <div className={s.infoElement}>
                        <div className={s.userInfo}>{item.label}</div>
                        <div
                            className={
                                !item.editor ? s.description : s.descriptionOff
                            }
                        >
                            {item.value}
                        </div>
                        <div
                            className={
                                !item.editor ? s.editFormOff : s.editForm
                            }
                        >
                            <input
                                type="text"
                                className={s.input}
                                value={item.value}
                                onChange={()=>{}}
                            />
                        </div>
                        <div
                            // className=
                            //     {cx(
                            //     `boxEdit${role}`,
                            //     item.label === 'ДОЛЖНОСТЬ' ? 'boxEditPosition' : '',
                            //     item.label === 'КОМПАНИЯ' && 'boxEditUser',
                            //     item.label === 'E-MAIL' &&
                            //     role === 'employee' &&
                            //     'boxEditUser',
                            //     item.label === 'ОТДЕЛ' &&
                            //     role === 'operator' &&
                            //     'boxEditUser',
                            // )}
                        >
                            <input
                                className={s.editorInput}
                                type="checkbox"
                                id={uuid()}
                            />
                            <label
                                className={s.editorIcon}
                                htmlFor={`change`}
                            />
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </>
    );
};

export default Form;