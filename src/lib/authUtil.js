const isAuthenticated = () =>{
    return localStorage.getItem('token') ? true : false
}

export{
    isAuthenticated
}