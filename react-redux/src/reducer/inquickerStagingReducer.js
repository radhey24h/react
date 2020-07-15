
const inquickerStagingReducer = (state = [], action) => {
    if (action.type === 'Get_Data') {
        return [...state, action.payload]
    }
    return state;
}
export default inquickerStagingReducer;