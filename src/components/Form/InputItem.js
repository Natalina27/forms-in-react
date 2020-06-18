import React, {useEffect, useState} from 'react';
import s from "./Form.module.css";

const InputItem=({ item, changeEditor } )=>{
    const initialState = item.value;
    const [value, setValue ] = useState(initialState);

    const changeInput = (e)=>{
        setValue(e.target.value)
    }

    return(
        <div key={item.id} className={s.infoContainer}>
            <div className={s.infoElement}>
                <div className={s.userInfo}>{item.label}</div>
                <input
                    disabled={!item.editor}
                    value={value}
                    onChange={(e)=>changeInput(e)}
                />
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
                    <label
                        className={s.editorIcon}
                        htmlFor={item.id}
                        id={item.id}
                        onClick={(e)=>changeEditor(e)}
                    />
                    {/*<input*/}
                    {/*    className={s.editorInput}*/}
                    {/*    type="checkbox"*/}
                    {/*    checked={true}*/}
                    {/*    id={item.id}*/}
                    {/*   */}
                    {/*/>*/}
                </div>
            </div>
        </div>
        )

};

export default InputItem;
