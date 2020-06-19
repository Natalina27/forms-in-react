import React, {useState} from 'react';
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

    const [dataState, setDataState] = useState(arrayInfo);

    console.log(dataState);

    const handleEditData = (id) => {
        const newItems = [...dataState];
        newItems.map(item => {
            if(item.id === id){
                item.editor = !item.editor;
            }
            return newItems;
        });
        setDataState([...newItems]);
    }

    const handleEditValue = (e, id) => {
        const newItems = [...dataState];
        newItems.map(item => {
            if(item.id === id){
                item.value = e.target.value;
            }
            return newItems;
        });
        setDataState([...newItems]);
    }
    console.log('dataState', dataState)
    return (
        <>
            <div className={s.container}>
            {dataState.map(item => (
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
                                disabled={!item.value}
                                value={item.value}
                                onChange={(e)=> handleEditValue(e,item.id)}
                            />
                        </div>
                        <div>
                            <input
                                className={s.editorInput}
                                type="checkbox"
                                id={uuid()}
                            />
                            <label
                                className={s.editorIcon}
                                htmlFor={`change`}
                                onClick={()=>handleEditData(item.id)}
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