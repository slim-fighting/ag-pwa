import express from 'express';
import cors from 'cors';

// mock data
const categories = [
    { id: 1, name: 'skills' },
    { id: 2, name: 'life' },
    { id: 3, name: 'notes' },
    { id: 4, name: 'others' }
];

const posts = [
    {
        id: 1,
        title: 'Angular',
        content: 'Angular is a framework for building client applications...',
        categoryId: 1,
        createdAt: '2024-03-20'
    },
    {
        id: 2,
        title: 'React',
        content: 'React is a library for building user interfaces...',
        categoryId: 2,
        createdAt: '2024-03-19'
    },
    {
        id: 3,
        title: 'Vue',
        content: 'Vue is a progressive framework for building user interfaces...',
        categoryId: 3,
        createdAt: '2024-03-18'
    }
];
const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.get('/api/posts', (req, res) => {
    console.log('posts is called');
    res.send(posts);
});

app.get("/api/categories", (req, res) => {
    console.log('categories is called');
    res.send(categories);
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
