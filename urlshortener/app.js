const button = document.querySelector('#urlButton');
const input = document.querySelector('#urlInput');
button.addEventListener('click', async ev => {
    console.log(input.value);
    const response = await shorten(input.value);
    input.value = `https://` + response.shortUrl;
});


function shorten(url) {
    const headers = new Headers();
    headers.append('apiKey', '618fed55948147efa5502930f4f6a651')
    headers.append('content-type', 'application/json')
    return fetch(`https://api.rebrandly.com/v1/links`, {
        method: 'post',
        headers,
        body: JSON.stringify({destination: url})
    }).then(response => response.json())
}

/*

    original url   |  shorttag
    https://mdn    |  g6dt2y1l

*/

https://domain.com/g6dt2y1l