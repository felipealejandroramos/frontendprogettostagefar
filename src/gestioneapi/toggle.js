import utenteattivo from "../utenteattivo";
export default (nome)=>{
    console.log("fertycx")
    let utente= utenteattivo.mostrautete()
    if (nome==='')
        return
    let url= "https://backendprogettofar.herokuapp.com/toggle/id:"+utente
    let newData = {
        nome: nome,
    }
    let u = new URLSearchParams(newData).toString();
    fetch(url,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: u
    })

}