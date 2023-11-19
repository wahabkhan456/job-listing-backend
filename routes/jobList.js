const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://farrukhehsan44:Password%40123A@cluster0.ldxjg.mongodb.net/job-listing?retryWrites=true&w=majority";
const client = new MongoClient(url);

router.get('/jobs', async (req, res) => {
    try {
        await client.connect();
        const collection = client.db('job-listing').collection('jobs');
        const docs = await collection.find({}).toArray();
        res.send(docs);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;