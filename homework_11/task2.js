const getTodo = () => fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
const getUser = () => fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json());


Promise.all([getTodo(), getUser()])
       .then(results => {
           console.log(results);
       })
       .catch(error => {
           console.error('Error:', error);
       });

Promise.race([getTodo(), getUser()])
       .then(result => {
           console.log(result);
       })
       .catch(error => {
           console.error('Error:', error);
       });
