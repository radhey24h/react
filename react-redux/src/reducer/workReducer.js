
const workReducer = (state = [], action) => {
    if (action.type === 'Add_Work') {
        return [...state, action.payload]
    }
    return state;
}
export default workReducer;