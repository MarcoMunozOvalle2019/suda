const EjecutarService = require('../service/productos.service');
const EjecutarFacade = require('../facade/productos.facade');

beforeEach(() => {});

describe('prueba2 Jest wallMart facade 201', () => {

    /** @test {EjecutarFacade.executeTransfer} */
    it('retorna un mensaje de éxito 201', async () => {
        EjecutarService.executeGetMongoBrandDescription = jest.fn().mockImplementation(() =>
           Promise.resolve(201),
        );
        EjecutarService.executeGetMongoId = jest.fn().mockImplementation(() =>
           Promise.resolve(201),
        );
         const request={query:{title:'123'}}
         const esto = await EjecutarFacade.executeTransfer(request,{});
        // expect(esto).toBe(201);
    });
    
});
