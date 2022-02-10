import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductAction } from './../redux/actions/ProductAction';
import axios from "axios";

const base_url = "http://localhost:3051/api/";

function EditProduct({ match, history, index }) {
    let productList = useSelector((state) => state.allProduct.products);
    let dispatch = useDispatch();

    let [editProduct, setEditProduct] = useState({
        product_name: "",
        product_price: "",
        _id: ""
    });

    let getEditData = async (values) => {
        let url = base_url + "edit-product";
        let id = match.params.id;
        // console.log("index:"+index);
        console.log("id:" + id);
        let _editProduct = productList.filter((product) => product._id === id);
        if (_editProduct.length === 0) {
            alert("Product not found");
            history.push("/");
        }
        else {
            _editProduct = _editProduct[0];
            console.log("_editProduct");
            console.log(_editProduct);
            setEditProduct(_editProduct);
            // let { data } = await axios.put(url, { data: _editProduct });
            let { data } = await axios.put(url, { data: {values} });
            console.log(values);
            console.log(data);
            // const updatedProduct = {
            //     product_name,
            //     product_price
            // }
            // if (data.status===1){
            //     dispatch(updateProductAction({ _editProduct,updatedProduct}));
            // }
        }
    };

    let updateProductDetails = (values) => {
       console.log(values);
    }

    let onSubmit =  (values, onSubmitProps) => {
        history.push("/");
        console.log("values");
        console.log(values);
        // updateProductDetails(values);
        // getEditData(values);
    };

    useEffect((values) => {
        getEditData(values);
    }, []);

    return (
        <>
            <button onClick={() => history.push("/")}>View Product List</button>
            <h4>Edit Product</h4>
            <Formik initialValues={editProduct} onSubmit={onSubmit} enableReinitialize>
                <Form>
                    <div>
                        <label htmlFor="product_name">Product Name</label>
                        <Field name="product_name" />
                    </div>
                    <div>
                        <label htmlFor="product_price">Product Price</label>
                        <Field name="product_price" />
                    </div>
                    <button type="submit">Update Product</button>
                </Form>
            </Formik>
        </>
    );
}

export default EditProduct;