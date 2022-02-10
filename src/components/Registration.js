import { Field, Form, Formik } from "formik";
import React from "react";
import axios from 'axios';

const base_url = "http://localhost:3051/api/";

function Registration({history}) {
    let initialValues = {
        name_of_user:"",
        username:"",
        password:""
    };

    let addNewUser =async (values) => {
        let url= base_url+"add-new-user";
        try {
            let result = await axios.post(url,values);
            let {data,headers}=result;
            if(data.status===0){
                alert(data.message);
            }
            else{
                localStorage.setItem("token",result.headers.x_auth_token);
                alert("User registered succesfully");
                // history.push("/");
                window.location.assign("/");
            }
        } catch (error) {
            console.log(error);            
        }
    }

    let onSubmit = (values, onSubmitProps) => {
        // console.log(values);
        addNewUser(values);
        // onSubmitProps.resetForm();
        // props.history.push('/');
    };


    return (
        <>
            <button onClick={() => history.push("/")}>View Product List</button>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <div>
                        <label htmlFor="">Full Name of User</label>
                        <Field name="name_of_user" />
                    </div>
                    <div>
                        <label htmlFor="">UserName</label>
                        <Field name="username" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <Field name="password" />
                    </div>
                    <button type="submit">Save User</button>
                </Form>
            </Formik>
        </>
    );
}

export default Registration;