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

//     console.log('role', role);
//
//     // попытка редактировать код по нажатию кнопки
//
//     const [editData, setEditData] = useState(arrayInfo);
//
//     console.log(editData);
//
//     const handleInputChange = e => {
//         const { target } = e;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const { name } = target;
//
//         setEditData({ ...arrayInfo, [value]: value });
//
//         console.log('target:', target);
//         console.log('value:', value);
//         console.log('name:', name);
//     };
//
//     const handleSubmit = e => {
//         e.preventDefault();
//         //setEditData({...editData.value})
//     };
//
    return (
        <>
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
                                //onChange={handleInputChange}
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
                                //onClick={handleSubmit}
                                //onClick={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

// const PersonPage: React.FC<StoreType & RouteComponentProps<any>> = ({
//                                                                         match,
//                                                                         user,
//                                                                         person,
//                                                                         history,
//                                                                     }) => {
//     const { organization_id, id } = user!.commonInfo;
//
//     useEffect(() => {
//         person!.getUserInfo(organization_id, match.params.id || id);
//     }, [id, match.params.id, organization_id, person]);
//
//     const handleClickLogout = () => {
//         person!.logout();
//         history.push('/');
//     };
//
//     return person?.userInfo.risk_level && person?.userInfo.group ? (
//         <div className={styles.container}>
//             <Card size="contentSize">
//                 <UserCard
//                     riskLevel={person?.userInfo.risk_level.value}
//                     riskColor={person?.userInfo.risk_level.color}
//                     groupText={person?.userInfo.group.value}
//                     groupColor={person?.userInfo.group.color}
//                     image={person?.userInfo.picture}
//                     onClickLogout={handleClickLogout}
//                 />
//             </Card>
//             <div className={styles.userData}>
//                 <UserData
//                     name={`${person.userInfo.first_name} ${person.userInfo.last_name}`}
//                     position={person.userInfo.position}
//                     department={person?.userInfo.department.toString()}
//                     organization={person?.userInfo.organization.toString()}
//                     email={'ivanov@gasprom.ru'}
//                     role={user?.commonInfo.role}
//                 />
//             </div>
//         </div>
//     ) : null;
// };
//

export default Form;