
export const stopPropagation =(func,dispatch)=>{
    return(e)=> {
        e?.stopPropagation()
        dispatch(func())
    }
}
export const sendRequest =(url)=>{
   return fetch(url)
        .then((res)=> {
            if(res.ok){
                return  res.json()
            }else {
                throw new Error("Error, try again!")
            }
        })
}
export const addCssClass =(class1,class2)=>{
    return `${class1} ${class2}`
}