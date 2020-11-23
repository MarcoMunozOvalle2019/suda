 const Trabajos = require('../../model/modelo')

/*  ejecuta el bice servicio api externa*/

class EjecutarService{

    static async executeGetMongoBrandDescription(req,res){
        let arreglo1=[]
        let arreglo2=[]
        try{

            arreglo1 = await Trabajos.find({ brand: { $regex: req.query.title } }).maxTimeMS(1000)
            arreglo2 = await Trabajos.find({ description: { $regex: req.query.title } }).maxTimeMS(1000)                        

        }catch(error){
            
        }

        return arreglo1.concat(arreglo2);
    }

    
    static async executeGetMongoId(id){
        let arreglo=[]
        try{
            arreglo = await Trabajos.find({"id": id})    
        }catch(error){
        }
        return arreglo;
    }

}
module.exports = EjecutarService;


