import {BaseController} from './BaseController.js';

export class UserController extends BaseController {
    constructor () {
        super();
        this.API_USERS_PROFILE = '/users/profile';
        this.API_USERS_CURRENT = '/users/current';
    }

    async getUserProfile () {
        return this.get(this.API_USERS_PROFILE);
    }

    async getUserCURRENT () {
        return this.get(this.API_USERS_CURRENT);
    }
}
