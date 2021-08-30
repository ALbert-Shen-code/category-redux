const initialState = []
const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case "fetch-data":
            return action.payload;
        case "select-data":
            return action.payload;
        default:
            return state;
    }
}

export default reducer;