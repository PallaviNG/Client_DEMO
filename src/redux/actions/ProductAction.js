import actionType from './actionType';
export const addNewProductAction = (newProduct) => {
    return {
        type: actionType.SAVE_NEW_PRODUCT,
        payload: newProduct
    };
};

export const removeProductAction = (p_id) => {
    return {
        type: actionType.REMOVE_PRODUCT,
        payload: p_id
    };
};

export const updateProductAction = (updateProduct) => {
    return {
        type: actionType.UPDATE_PRODUCT,
        payload: updateProduct
    };
};

export const addProductListAction = (newProductList) => {
    return {
        type: actionType.SAVE_NEW_PRODUCT_LIST,
        payload: newProductList
    };
};