import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link , useHistory } from "react-router-dom";
import {createUser } from "../../Redux/actions/";
import { useEffect } from "react";

import style from "./Register.module.css";



export default function CreateUser(){
    let dispatch = useDispatch()
    let history = useHistory()
    // const users = useSelector((state) => state.filteredUsers)
    const [error, setError] = useState({})
    
    function validate(input){
        let errors = {}
        
        if(!input.name){
            errors.name = "You have to select a name!."
        }
        if(input.name.search("[0-9]") !== -1) {
            errors.name = "The name must not contain numbers."
        }
        if(input.name.search("[^A-Za-z0-9]") !== -1) {
            errors.name = "The name must not contain symbols or spaces."
        }
        if(!input.password){
            errors.password = "You have to select a password!."
        }
        if(!input.email){
            errors.email = "You have to select a email!."
        }
        if(!input.phone){
            errors.phone = "You have to select a phone number!."
        }
        // if(users.find(p => p.name.toLowerCase() === input.name.toLowerCase())){
            //     errors.name = "There is already a user with that name, try to create it with another"
            // }
            return errors
        };
        
        // useEffect(() => {
            //     dispatch(getRoles())
            // },[dispatch])
    const roles = ["user", "company", "hibrid"]

    const [input, setInput] = useState({
    name : "",
    email: "",
    phone: "",
    password: "",
    roles: []
    })

    const [role, setRole] = useState({
        role1: "",
       
    })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
        
    }

    const handleSelect = (e) => {
      
        setRole({
            ...role,
            [e.target.name] : e.target.value
        })
        if(e.target.name === "role1"){
            setInput({
                ...input,
                roles: [e.target.value]
            })
        }
    
        setError(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.roles.length === 0){
            return alert("You need pick a role")
         }
         const data = {...input}
        dispatch(createUser(data))
        setInput({
            name : "",
            email: "",
            phone: "",
            password: "",
            roles: {}
        })
        alert("Register successfull!")
        history.push("/home")
    }

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h1 className={style.h1}>Create User</h1>
                    <div className={style.divtextimg}>
                <div className={style.divtext}>

                <div className={style.diverror}>
                    <label className={style.label}>Name: </label>
                    <input type="text" name="name" value={input.name} onChange={(e) => handleInput(e)} className={style.input}/>
                    {error.name && (
                        <p className={style.error}>{error.name}</p>
                        )}
                </div>

                <div className={style.diverror}>
                    <label className={style.label}>Email: </label>
                    <input type="email" name="email" value={input.email} onChange={(e) => handleInput(e)} className={style.input}/>
                    {error.email && (
                        <p className={style.error}>{error.email}</p>
                        )}
                </div>
                
                <div className={style.diverror}>
                    <label className={style.label}>Phone: </label>
                    <input type="number" name="phone" value={input.phone} onChange={(e) => handleInput(e)} className={style.input}/>
                    {error.phone && (
                        <p className={style.error}>{error.phone}</p>
                        )}
                </div>

                <div className={style.diverror}>
                    <label className={style.label}>Password: </label>
                    <input type="password" name="password" value={input.password} onChange={(e) => handleInput(e)} className={style.input}/>
                    {error.password && (
                        <p className={style.error}>{error.password}</p>
                        )}
                </div>

                <div>
                    <label className={style.label}>Roles: </label>
                    <select defaultValue={"none"} name="role1" onChange={(e) => handleSelect(e)} className={style.select}>
                    <option value="none">Select role...</option>
                        {roles.map((e) => {
                            return(
                                <option value={e}>{e}</option>
                                )
                            })}
                    </select>
                    
                </div>
                    </div>

                </div>
                <div className={style.divbutton}>
                <Link to="/home"><button className={style.button}>
                    Go Home
                </button></Link>

                {
                    !error.name && !error.email && !error.phone && !error.password ?  
                    <button type="submit" className={style.button}>
                            Create User
                         </button> : null
                }
                </div>

                </div>
            </form>
        </div>
    )
};