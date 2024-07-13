async function fetchData (url, options) {
    try {
        const response = await fetch(url, options);

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function getTodo () {
    try {
        const users = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
        console.log('GET Response:', users);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getUser () {
    try {
        const users = await fetchData('https://jsonplaceholder.typicode.com/users/1');
        console.log('GET Response:', users);
    } catch (error) {
        console.error('Error:', error);
    }
}

getTodo();
getUser();
