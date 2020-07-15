export const inquickerStagingAction = () => {
    return async (dispatch) => {
        // const data = await fetch('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services');
        // console.log(data);

        // const url = `https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services`;
        // const id = fetch(url)
        //   .then((response) => {
        //     return response.json();
        //   })
        //   .then(res => {
        //     return res.data[0].id
        //   });
    
        dispatch({ type: 'Get_Data', payload: 'id' })
    }
}