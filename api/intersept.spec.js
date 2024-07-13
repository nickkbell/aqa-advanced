import axios from 'axios';

const instance = axios.create();

axios.interceptors.request.use(
    config => {
        config.headers.Authorization = 'Bearer token';
        config.timeout = 1;

        console.log('Request Interceptor - Request Config:', config);

        return config;
    },
    error => Promise.reject(error)
);

instance.interceptors.response.use(
    response => {
        response.data.forEach(item => item.interSept = 'Added by interceptor');

        console.log('Response Interceptor - Response Data:', response.data);

        return response;
    },
    error => {
        error.name = 'custom error for test';
        error.code = 501;

        console.log('Response Interceptor - Error:', error);

        return Promise.reject(error);
    }
);

describe('try to intersept request', () => {
    test('intersept request', async () => {
        try {
            await axios.get('https://jsonplaceholder.typicode.com/todos');
        } catch (error) {
            expect(error.message).toEqual('timeout of 1ms exceeded');
        }
    });
});

describe('try to intersept response', () => {
    test('success intersept response', async () => {
        const response = await instance.get('https://jsonplaceholder.typicode.com/users');

        response.data.forEach(data => {
            expect(data).toHaveProperty('interSept');
            expect(data.interSept).toEqual('Added by interceptor');
        });
    });

    test('error intersept response', async () => {
        try {
            await instance.get('https://jsonplaceholder.typicode.com/notExistEndpoint');
        } catch (error) {
            expect(error.name).toEqual('custom error for test');
            expect(error.code).toEqual(501);
        }
    });
});
