var lista=""

module.exports ={

    mostralista: function(){
        console.log(lista)
        return lista
    },

    cambialista: function (nuovo) {
        console.log(lista)
        lista=nuovo
        console.log(lista)
    }


}

