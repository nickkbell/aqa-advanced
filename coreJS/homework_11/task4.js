/* eslint-disable max-classes-per-file */
class PromiseMethods {
    constructor (url) {
        this.url = url;
    }

    getData () {
        fetch(this.url)
            .then(response => response.json())
            .then(results => {
                console.log(results);
            });
    }
}

class AsyncMethods {
    constructor (url) {
        this.url = url;
    }

    async fetchData (url, options) {
        try {
            const response = await fetch(url, options);

            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async getAsyncData () {
        try {
            const users = await this.fetchData(this.url);
            console.log('GET Response:', users);
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

new PromiseMethods('https://jsonplaceholder.typicode.com/todos/1').getData();
new PromiseMethods('https://jsonplaceholder.typicode.com/users/1').getData();

new AsyncMethods('https://jsonplaceholder.typicode.com/todos/1').getAsyncData();
new AsyncMethods('https://jsonplaceholder.typicode.com/users/1').getAsyncData();
