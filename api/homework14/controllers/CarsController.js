import {BaseController} from './BaseController.js';

export class CarsController extends BaseController {
    constructor () {
        super( );
        this.API_CARS = '/cars';
        this.API_CARS_BRANDS = '/cars/brands';
        this.API_CARS_MODELS = '/cars/models';
    }

    async getCars () {
        return this.get(this.API_CARS);
    }

    async getCarById (id) {
        return this.get(`${this.API_CARS}/${id}`);
    }

    async getCarBrands () {
        return this.get(this.API_CARS_BRANDS);
    }

    async getCarBrandById (id) {
        return this.get(`${this.API_CARS_BRANDS}/${id}`);
    }

    async getCarModels () {
        return this.get(this.API_CARS_MODELS);
    }

    async getCarModelById (id) {
        return this.get(`${this.API_CARS_MODELS}/${id}`);
    }

    async createCars (carBrandId, carModelId, mileage) {
        return this.post(this.API_CARS, {
            carBrandId,
            carModelId,
            mileage
        });
    }

    async deleteCars (id) {
        return this.delete(`${this.API_CARS}/${id}`);
    }
}
