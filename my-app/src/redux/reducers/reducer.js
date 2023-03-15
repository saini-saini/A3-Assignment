const initialState = []

export const cartReducer = (state=initialState,action) =>{
    switch(action.type){
        case "Add_to_cart": return [...state,action.payload]
        default : return state
    }
}