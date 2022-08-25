export default (username,password)=>{
    if (username==='' || password==='')
    return
    let url= "https://backendprogettofar.herokuapp.com/agungi"
    let newUserData = {
        username: username,
        password: password
    }
    let u = new URLSearchParams(newUserData).toString();
    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: u
    })

}