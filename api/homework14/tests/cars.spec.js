import {CarsController} from '../controllers/CarsController';


const carsController = new CarsController();
const randomMileage = () => Math.round(Math.random() * 1000);

describe('user has access to all brands and models of cars', () => {
    const expectedData = [
        {id: 1, title: 'Audi'},
        {id: 2, title: 'BMW'},
        {id: 3, title: 'Ford'},
        {id: 4, title: 'Porsche'},
        {id: 5, title: 'Fiat'}
    ];

    beforeAll(async () => {
        await carsController.login();
    });

    test('user can get all brands of cars', async () => {
        const response = await carsController.getCarBrands();

        expect(response.status).toBe(200);
        expect(response.data.data).toHaveLength(5);
        response.data.data.forEach((data, index) => {
            expect(data.id).toBe(expectedData[index].id);
            expect(data.title).toBe(expectedData[index].title);
        });
    });

    test('user can get all models of cars', async () => {
        const response = await carsController.getCarModels();

        expect(response.status).toBe(200);
        expect(response.data.data).toHaveLength(23);
    });

    test('user cannot view not exist brand', async () => {
        const response = await carsController.getCarBrandById(9999);

        expect(response.status).toBe(404);
        expect(response.data.status).toEqual('error');
    });

    test('user cannot view not exist model', async () => {
        const response = await carsController.getCarModelById(9999);

        expect(response.status).toBe(404);
        expect(response.data.status).toEqual('error');
    });
});

describe('get all cars for user', () => {
    beforeAll(async () => {
        await carsController.login();
    });

    test('user can get cars from garage - should be empty by default', async () => {
        const response = await carsController.getCars();

        expect(response.status).toBe(200);
        expect(response.data.data).toHaveLength(0);
    });

    test('user cannot view not exist car', async () => {
        const response = await carsController.getCarById(9999);

        expect(response.status).toBe(404);
        expect(response.data.status).toEqual('error');
    });
});


describe('create all cars for user - positive cases', () => {
    const carsIds = [];

    beforeAll(async () => {
        await carsController.login();
    });

    afterAll(async () => {
        for (const id of carsIds) {
            await carsController.deleteCars(id);
        }

        const checkDeletion = await carsController.getCars();
        expect(checkDeletion.data.data).toHaveLength(0);
    });


    test('try to create cars - should pass', async () => {
        const carsAmountInGarage = (await carsController.getCars()).data.data;
        const carModels = (await carsController.getCarModels()).data.data;

        for (const carModel of carModels) {
            const {id: carModelId, carBrandId} = carModel;
            const createCar = await carsController.createCars(carBrandId, carModelId, randomMileage());

            carsIds.push(createCar.data.data.id);

            expect(createCar.status).toBe(201);
        }

        const userCars = (await carsController.getCars()).data.data;

        expect(userCars.length).toEqual(carModels.length);
        expect(userCars.length).toBeGreaterThan(carsAmountInGarage.length);
    });
});

describe('create cars - negative cases', () => {
    const wrongData = [
        {testName: 'wrong car brand id', data: {carBrandId: 'brand', carModelId: 1, mileage: randomMileage()}},
        {testName: 'wrong car model id', data: {carBrandId: 1, carModelId: 'model', mileage: randomMileage()}},
        {testName: 'wrong mileage', data: {carBrandId: 1, carModelId: 1, mileage: -9999}}
    ];

    beforeAll(async () => {
        await carsController.login();
    });

    for (const data of wrongData) {
        test(`${data.testName} - should fail`, async () => {
            const response = await carsController.createCars(data.data.carBrandId, data.data.carModelId, data.data.mileage);

            expect(response.status).toBe(400);
            expect(response.data.status).toEqual('error');
        });
    }
});
