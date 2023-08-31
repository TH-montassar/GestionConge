
import express from 'express';
const app = express();


const port = process.env.PORT || 5000;
const HOST = 'localhost';
app.listen(port, HOST, () => {
    console.log(`server in running on http://${HOST}:${port}`);
});