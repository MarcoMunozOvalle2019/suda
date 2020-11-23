const EjecutarFacade = require('../facade/productos.facade')


/*  ejecuta wallMart controlador*/
class EjecutarController{
    static async executeTransfer(req,res){
        const output = await EjecutarFacade.executeTransfer(req,res)
        return output
    }
}

module.exports = EjecutarController;
