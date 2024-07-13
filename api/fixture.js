export const resources = [
    {url: '/posts', total: 100},
    {url: '/comments', total: 500},
    {url: '/albums', total: 100},
    {url: '/photos', total: 5000},
    {url: '/todos', total: 200},
    {url: '/users', total: 10}
];


export const getRequestsByID = [
    {
        request: {
            url: '/todos/1'
        },
        response: {
            code: 200,
            data: {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
        }
    },
    {
        request: {
            url: '/posts/1'
        },
        response: {
            code: 200,
            data: {
                userId: 1,
                id: 1,
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\n'
                  + 'suscipit recusandae consequuntur expedita et cum\n'
                  + 'reprehenderit molestiae ut ut quas totam\n'
                  + 'nostrum rerum est autem sunt rem eveniet architecto'
            }
        }
    },
    {
        request: {
            url: '/albums/1'
        },
        response: {
            code: 200,
            data: {userId: 1, id: 1, title: 'quidem molestiae enim'}
        }
    },
    {
        request: {
            url: '/photos/1'
        },
        response: {
            code: 200,
            data: {
                albumId: 1,
                id: 1,
                title: 'accusamus beatae ad facilis cum similique qui sunt',
                url: 'https://via.placeholder.com/600/92c952',
                thumbnailUrl: 'https://via.placeholder.com/150/92c952'
            }
        }
    },
    {
        request: {
            url: '/users/1'
        },
        response: {
            code: 200,
            data: {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                address: {
                    street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {lat: '-37.3159', lng: '81.1496'}
                },
                phone: '1-770-736-8031 x56442',
                website: 'hildegard.org',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                    bs: 'harness real-time e-markets'
                }
            }
        }
    }
];

export const postRequests = [
    {
        url: '/todos/',
        body: {userId: 101, title: 'api test', completed: false}
    },
    {
        url: '/posts/',
        body: {userId: 201, title: 'api test 2', body: 'test for posts'}
    }
];
