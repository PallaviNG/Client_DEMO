import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AddProduct from './AddProduct';
import ProductList from "./ProductList";
import EditProduct from './EditProduct';
import Registration from './Registration';

function Product() {
    let currentUser = localStorage.getItem("token") === null ? false : localStorage.getItem("token");
    console.log(currentUser);

    return (
        <>
            <Switch>
                <Route path="/add-product" exact render={(props) => {
                    if (currentUser !== false) return <AddProduct  {...props} />
                    else return <Redirect to="/registration" />
                }} />
                <Route path="/" exact render={(props) => {
                    if(currentUser!==false) return <ProductList {...props} />
                    else return <Redirect to="/registration"/>
                    }} />
                <Route path="/edit-product/:id" exact render={(props) => {
                    if (currentUser !== false) return <EditProduct  {...props} />
                    else return <Redirect to="/registration" />
                }} />
                <Route path="/registration" render={(props) => (<Registration {...props} />)} />
            </Switch>
        </>
    )
};

export default Product;