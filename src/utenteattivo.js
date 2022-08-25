var utente=""

module.exports ={

    mostrautete: function(){
        console.log("ciao "+utente)
        return utente
    },

    cambiautente: function (nuovo) {
        console.log(utente)
        utente=nuovo
        console.log(utente)
    }


}