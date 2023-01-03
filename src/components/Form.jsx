import React, { useState } from "react";
import validation from './validation.js';
import styles from './Form.module.css'

export default function Form(props) {
    const[userData,setUserData] = useState({
        username:'',
        password:'',
    })

    const [errors, setErrors] = useState({
        username:'',
        password:'',
    })

    const handleInputChange = (event) =>{
        const value = event.target.value;
        const property = event.target.name;
        setUserData({
            ...userData,
            [property]:value
        })
        setErrors(validation({
            ...userData,
            [property]:value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.login(userData)
    }

    return (
        <div className={styles.formBody}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputs}>
                    <input className={errors.username && styles.warning} type="text" name='username' value={userData.username} onChange={handleInputChange}/>
                    <p className={styles.danger}>{errors.username}</p>
                    <label>Username:</label>
                    
                </div>

                <div className={styles.inputs}>
                    <input className={errors.password && styles.warning} type="password" name='password' value={userData.password} onChange={handleInputChange} />
                    <p className={styles.danger}>{errors.password}</p>
                    <label>Password:</label>
                    
                </div>

                <button type="submit" className={styles.btn}>LOGIN</button>
            </form>

        </div>
    )
};