export const getName = () => {
    return async (dispatch) => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const res = await data.json()
        dispatch({ type: 'Change_Name', payload: res[0].name })
    }
}

export const addWork = () => {
    return {
        type:'Add_Work',
        payload:'coding'
    }
}