const EjecutarService = require('../service/productos.service');

/*  ejecuta el wallMart Facade, logica de Negocio*/
class EjecutarFacade{

    static async executeTransfer(req,res){
    let data
    try {
        let output = await this.getData(req,res)
        data = output
    }catch (err) {
        data = 'error:'+err
        return data
    }
    return data
    }



/*funcion obtiene data desde MongoDB*/
static getData = (async(req,res)=>{
    let arreglo=[]
    let mm=-1
    
    try {
        const entrada = req.query.title
        if(this.isPalindromo(entrada)) {mm=1}
          

        const id = parseInt(entrada)
        const patt = new RegExp(/^[^\*\+]/); 
        const patron = patt.test(entrada);    

        if(patron && entrada!=undefined ){
            if(isNaN(id)){
                /* busca por marca y descripcion mayor a 3 caracteres*/
                if(entrada.length>=3){
                    arreglo = await EjecutarService.executeGetMongoBrandDescription(req, res)                    
                    if(arreglo.length>0){
                        arreglo.map((esto)=>{
                            esto.mitad = esto.price / 2
                            esto.palindromo = mm
                        })
                    }
                    
                } else arreglo.length = 0
            }else
                /* busca por id */
                arreglo = await EjecutarService.executeGetMongoId(id)                    
                if(arreglo.length >= 0) {
                           arreglo[0].mitad = arreglo[0].price / 2
                           arreglo[0].palindromo = mm
                }
        }


    }catch(e){
    }

  return arreglo
})


/*funcion es palindromo ?*/
static isPalindromo = ((data)=>{
    let ss = true
    try {
        for (var i=0;i<data.length;i++){
            if(data[i]!=data[data.length-i-1]){
                ss = false
            }
        }
    }catch(e){
    }
  return ss
})


}


module.exports = EjecutarFacade;