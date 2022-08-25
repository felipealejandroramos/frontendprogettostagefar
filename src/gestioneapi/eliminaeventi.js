import utenteattivo from "../utenteattivo"
export default (nome)=>{
    let utente= utenteattivo.mostrautete()
    if (nome==='')
    return
    let url= "https://backendprogettofar.herokuapp.com/elimina/id:"+utente
    let newData = {
        nome: nome,
    }
    let u = new URLSearchParams(newData).toString();
    fetch(url,{
        method: 'Delete',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: u
    })

}