import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { addNewProductAction } from './../redux/actions/ProductAction';
import axios from 'axios';

const base_url = "http://localhost:3051/api/";

function AddProduct(props) {
    let dispatch = useDispatch();
    let initialValues = {
        product_name: "",
        product_price: ""
    };

    let saveNewProduct = async (values) => {
        const url = base_url + "add-new-product";
        try {
            let result = await axios.post(url, values);
            dispatch(addNewProductAction(result.data.result));
        } catch (error) {
            console.log(error);
        }
    };

    let onSubmit = (values, onSubmitProps) => {
        saveNewProduct(values);
        onSubmitProps.resetForm();
        props.history.push('/');
    };


    return (
        <>
            <button onClick={() => props.history.push("/")}>View Product List</button>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <div>
                        <label htmlFor="">Product Name</label>
                        <Field name="product_name" />
                    </div>
                    <div>
                        <label htmlFor="">Product Price</label>
                        <Field name="product_price" />
                    </div>
                    <button type="submit">Save Product</button>
                </Form>
            </Formik>
        </>
    );
}

export default AddProduct;