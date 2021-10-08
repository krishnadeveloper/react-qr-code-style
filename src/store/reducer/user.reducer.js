const USER_INITIAL_STATE = {
    status:true,
    name:"Krishna",
    sirname:"Kumar"
}

const userReducer = (state=USER_INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case "value":
            return state;
    
        default:
            return state;
    }
}

export default userReducer;