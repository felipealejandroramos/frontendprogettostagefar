import utenteattivo from "../utenteattivo";
import lista from "../lista";
export default ()=> {
        
    let utente= utenteattivo.mostrautete()
    let url= "https://backendprogettofar.herokuapp.com/vedi/id:"+utente
    fetch(url,{
        method: 'Get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res=>{ res.json().then(data=>{  lista.cambialista(data) })})
   
    
}