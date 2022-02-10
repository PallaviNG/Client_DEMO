import actionType from './../actions/actionType';

let initData = {
    products: [],
    isDefaultLoaded:0
};

export const ProductReducers = (state = initData, action) => {
    let { type, payload } = action;
    switch (type) {
        case actionType.SAVE_NEW_PRODUCT:
            let newProducts = [...state.products];
            newProducts.push(payload);
            console.log(newProducts);
            return { ...state, products: newProducts };

        case actionType.REMOVE_PRODUCT:
            let removeProduct = [...state.products];
            removeProduct.splice(payload, 1);
            console.log(removeProduct);
            return { ...state, products: removeProduct };

        case actionType.UPDATE_PRODUCT:
            console.log("update product reducer");
            console.log(state);
            let stateProducts = [...state.products];
            return stateProducts.map((product,index) => {
                if(product._id===payload._editProduct._id) {
                    console.log("found match");
                    // console.log(product);
                    console.log(payload);
                    stateProducts.splice(1,index,payload._editProduct);
                    // console.log(state);
                    return {
                        ...state,products:payload
                    }
                }
                return state;
            });
        //     // return {...state, products: updateProduct};

        case actionType.SAVE_NEW_PRODUCT_LIST:
            // console.log('add-list');
            // console.log(payload);
            return {...state,...payload};

        default:
            return state;
    }
};