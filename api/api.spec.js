import axios from 'axios';
import {resources, getRequestsByID, postRequests} from './fixture';


describe.skip('get all resources - should pass', () => {
    resources.forEach(resource => {
        test(`GET ${resource.url}`, async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource.url}`);

            expect(response.status).toBe(200);
            expect(response.data).toHaveLength(resource.total);
        });
    });
});

describe.skip('check resources by ID - should pass', () => {
    for (const resource of getRequestsByID) {
        test(`GET ${resource.request.url}`, async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource.request.url}`);

            expect(response.status).toBe(resource.response.code);
            expect(response.data).toStrictEqual(resource.response.data);
        });
    }
});

describe.skip('create resources - should pass', () => {
    for (const request of postRequests) {
        test(`POST ${request.url}`, async () => {
            const response = await axios.post(`https://jsonplaceholder.typicode.com/${request.url}`, request.body);

            expect(response.status).toBe(201);
            expect(response.data).toMatchObject(request.body);
            expect(response.data).toHaveProperty('id');
        });
    }
});
