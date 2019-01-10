const express = require('express');

const app = express();

app.get('/api/customers', (req, res)  => {

    const customers = [
        {id: 1, firstName: "Alex", lastName: 'Doe'},
        {id: 2, firstName: "Al", lastName: 'Dd'},
        {id: 3, firstName: "A", lastName: 'Swanson'},
    ]

    res.json(customers)

});

const port = 80;

app.listen(port, () => {console.log('Server started on port ${port}')})