const initialState = []

export const cartReducer = (state=initialState,action) =>{
    switch(action.type){
        case "Add_to_cart": return [...state,action.payload]
        case 'Remove_from_cart': return state.filter((product)=>product.id != action.payload)
        default : return state
    }
}