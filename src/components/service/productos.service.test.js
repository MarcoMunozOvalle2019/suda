const mongoose = require('mongoose');
const EjecutarService = require('./productos.service');


jest.mock('mongoose');

beforeEach(() => {});

/** @test {EjecutarService} */
describe('GetData Service', () => {
	/** @test {EjecutarService.getDataByFilter} */
	it('retorna operación exitosa, al obtener data', async () => {
         const mockBusinessData = {
            find: jest.fn().mockResolvedValue(''),
			insertMany: jest.fn().mockResolvedValue(''),
			collection: {
				createIndex: jest.fn().mockResolvedValue(''),
			},
		};
         
		 mockBusinessData.sort = jest.fn().mockReturnValue({ mockBusinessData });
		 mockBusinessData.find = jest.fn().mockReturnValue(mockBusinessData);
		 mongoose.Schema = jest.fn();
		 mongoose.model.mockImplementation(() => mockBusinessData);
 		 mongoose.models = {
            "id": Number,
            "brand": String,
            "description": String,
            "image": String,
            "price": Number,
            "mitad": Number
                };
		// request.headers.funcionalidad = 'SVX003';
         const service = await EjecutarService.executeGetMongoId(123);
		 expect(service.mockBusinessData).toBe(undefined);
	});
});
