import axios from 'axios';

export class BaseController {
    constructor () {
        this._options = {
            baseURL: 'https://qauto.forstudy.space/api',
            validateStatus: () => true

        };
        this._axios = axios.create(this._options);
    }

    async login () {
        const authResp = await this._axios.post('/auth/signin', {
            email: 'nikitaabelitskiy@gmail.com',
            password: 'zKxvUTAcN5Td',
            remember: false
        });

        const sid = authResp.headers['set-cookie'][0].split(';')[0];

        this._options.headers = {Cookie: sid};
        this._SessionID = sid;
    }

    async get (url) {
        return this._axios.get(url, this._options);
    }

    getSessionID () {
        return this._SessionID;
    }

    async post (url, body) {
        return this._axios.post(url, body, this._options);
    }

    async delete (url) {
        return this._axios.delete(url, this._options);
    }
}
