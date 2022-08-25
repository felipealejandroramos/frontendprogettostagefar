import utenteattivo from "../utenteattivo"

export default (username,password)=>{
    if (username==='' || password==='')
        return null
    let url= "https://backendprogettofar.herokuapp.com/accedi"
    let thisUserData ={
        username: username,
        password: password
    }
    let u = new URLSearchParams(thisUserData).toString();
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body: u
    }).then(res=>{ res.text().then(data => {
       utenteattivo.cambiautente(data)
     })
        
     }).catch(error => console.error('Error: ', error));
}