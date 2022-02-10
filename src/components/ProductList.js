import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductListAction, removeProductAction } from "../redux/actions/ProductAction";
import axios from 'axios';

const base_url = "http://localhost:3051/api/";

function ProductList({ history }) {
    let productList = useSelector((state) => state.allProduct.products);
    let isLoaded = useSelector((state) => state.allProduct.isDefaultLoaded);
    let dispatch = useDispatch();

    let removeProduct = async (index, id) => {
        let url = base_url + "delete-product";
        let sendData = {
            id: id
        }
        let { data } = await axios.delete(url, { data: sendData });
        if (data.result === 1) {
            dispatch(removeProductAction(index));
        }
        else {
            alert("unable to delete product");
        }
    }

    let editProduct = (index,id) => {
        history.push('/edit-product/'+id);
    }

    let getProductList = async () => {
        let url = base_url + 'get-product-list';
        let { data } = await axios.get(url);
        let newProductList = {
            products: data.list,
            isDefaultLoaded: 1
        }
        dispatch(addProductListAction(newProductList));
        console.log("effect");
    }

    useEffect(() => {
        if (isLoaded === 0) getProductList();
    }, []);

    return (
        <>
            <button onClick={() => history.push("/add-product")}>Add New Product</button>
            <section className="product">
                {productList.length > 0 ? (
                    productList.map((product, index) => {
                        return (
                            <div className="product-card" key={index}>
                                <p>{product.product_name}</p>
                                <span>&#8377;{product.product_price}</span>
                                <button onClick={() => removeProduct(index, product._id)}>DELETE</button>
                                <button onClick={() => editProduct(index,product._id)}>EDIT</button>
                            </div>
                        );
                    })//map
                ) : (<div>No Products Available</div>)
                }
            </section>
        </>
    );
}

export default ProductList;