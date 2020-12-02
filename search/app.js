fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => initTable(users));

function initTable(users) {
    const filters = {};
    parseUrl();

    const table = document.createElement('table');
    table.className = 'table';
    table.innerHTML = `<thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
        <tr>
            <th></th>
            <th>
                <input data-field="name" class="form-control" value="${filters['name'] || ''}"/>
            </th>
            <th>
                <input data-field="username" class="form-control" value="${filters['username'] || ''}"/>
            </th>
            <th>
                <input data-field="email" class="form-control" value="${filters['email'] || ''}"/>
            </th>
            <th>
                <input data-field="phone" class="form-control" value="${filters['phone'] || ''}"/>
            </th>
        </tr>
    </thead>
    `;

    const tbody = document.createElement('tbody');

    renderUsers(users);
    applyFilters();
    table.append(tbody);
    document.body.append(table);

    const inputs = table.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('blur', (evt) => {
            filterTable(evt.target.dataset.field, evt.target.value)
        })
        input.addEventListener('keyup', (evt) => {
            if (evt.keyCode === 13) {
                filterTable(evt.target.dataset.field, evt.target.value)
            }
        })
    })

    function renderUsers(users) {
        const content =  users.map((user, index) => (
            `<tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
            </tr>
            `
        )).join("\n");
        tbody.innerHTML = content;
    }
    
    function filterTable(field, value) {
        applyFilter(field, value);
        changeUrl(field, value);
    }

    function changeUrl(field, value){
        
        if (!value) {
            delete filters[field]
        } else {
            filters[field] = value;
        }

        const queryString = "?"+Object.entries(filters).map(subArray => subArray.join('=')).join('&');        
        // https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
    }

    function parseUrl(){
        if ( !window.location.search) {
            return;
        }
        const parts = window.location.search.replace('?', '')
            .split("&");
        parts.forEach(part => {
            const [field, value] = part.split('=');
            filters[field] = value;
        })
        
    }

    function applyFilters(){
        for (let field in filters) {
            applyFilter(field, filters[field]);
        }
    }

    function applyFilter(field, value) {
        const newUsers = users
            .filter(user => {
                return user[field].toLowerCase().includes(value.toLowerCase());
            })

        renderUsers(newUsers);
    }
}
