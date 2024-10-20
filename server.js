const express = require('express');
const app = express();
const port = 5000;

const items = [{
    id: 1,
    name: 'apple'
}, {
    id: 2,
    name: 'pineapple'
}, {
    id: 3,
    name: 'banana'
},{
    id: 4,
    name: 'guava'
},{
    id: 5,
    name: 'avacado'
},{
    id: 6,
    name: 'peach'
}
]

app.get('/api/search', (req, res) => {
    const { q } = req.query;
     const filteredItems = items.filter(items => items.name.toLowerCase().includes(q.toLowerCase()));
    res.json( filteredItems );
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
