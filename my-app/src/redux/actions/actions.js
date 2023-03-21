export const cartActions=(product)=>{
    return {
        type:"Add_to_cart",
        payload:product
    }
}

export const removeCartAction = (id) => {
    return {
        type:'Remove_from_cart',
        payload:id
    }
}