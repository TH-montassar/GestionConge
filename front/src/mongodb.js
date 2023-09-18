import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(express.json());

const port = 3000;

// Define your Swagger options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Title',
      version: '1.0.0',
      description: 'Your API Description',
    },
    servers: [
      {
        url: 'http://localhost:3000/',
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/mongodb.js'], // Update the path to your API routes file
};

const specs = swaggerJsdoc(options);

// Serve Swagger documentation at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Define a test GET route
app.get('/', (req, resp) => {
  resp.send('test get method');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
