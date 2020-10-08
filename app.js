// Ajax
// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//         console.log(data);
//     }
// }

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.send();


// Callbacks
// function fetchData(url, callback) {
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const data = JSON.parse(xhr.responseText);
//             callback(data)
//         }
//     }

//     xhr.open('GET', url);
//     xhr.send();
// }

// fetchData('https://jsonplaceholder.typicode.com/users', users => {
//     console.log(users);
// });

// Callback hell

// fetchData('https://jsonplaceholder.typicode.com/users', users => {
//     console.log(users);
//     if (users.length) {
//         fetchData(`https://jsonplaceholder.typicode.com/users/${users[0].id}/posts`, posts => {
//             console.log(posts);
//             fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`, comments => {
//                 console.log(comments);
//             });
//         })
//     }
// });

// Promises: Promise.all()

// const promise = new Promise((resolve, reject) => {
//     fetchData('https://jsonplaceholder.typicode.com/users', resolve)
// });

// promise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

function fetchData(url) {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    res(data)
                } else {
                    rej(xhr)
                }
            }
        }

        xhr.open('GET', url);
        xhr.send();
    })
}

// fetchData('https://jsonplaceholder.typicode.com/users')
//     .then(users => {
//         return fetchData(`https://jsonplaceholder.typicode.com/users/${users[0].id}/posts`)
//     })
//     .then(posts => {
//         return fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`)
//     })
//     .then(comments => {
//         console.log(comments);
//     })
//     .catch(xhr => {
//         console.log(xhr);
//     })
//     ;
// Promise.all

// fetchData('https://jsonplaceholder.typicode.com/users')
//     .then(users => {
//         const promises = [];
//         users.forEach(u => {
//             const promise = fetchData(`https://jsonplaceholder.typicode.com/users/${u.id}/posts`)
//             promises.push(promise);
//         });
//         Promise.all(promises)
//             .then(postsArray => {
//                 console.log(postsArray);
//             })
//     })

// Fetch

function fetchData(url) {
    return fetch(url).then(response => response.json())
}

function postData(url, body) {
    const headers = new Headers();
    headers.append('content-type', 'application/json')
    return fetch(url, { method: 'post', headers, body: JSON.stringify(body) })
        .then(response => response.json())
}

// fetchData(`https://jsonplaceholder.typicode.com/users`)
//     .then(users => {
//         console.log(users);
//     });


// postData(`https://jsonplaceholder.typicode.com/users`, {username: 'saba'})

// Async & Await

(async function(){
    try {
        const users = await fetchData(`https://jsonplaceholder.typicode.com/userss`);
        console.log(users);
    } catch(e) {
        console.log(e);
    }
})()


