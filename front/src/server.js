
import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();

const options={
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Gestion Congé CRUD REST API ',
            version: 'this is A CRUD API made with Express and documentation Swagger'
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: 'Development server'
            }
        ],
        components: {
            schemas : {
                Book: {
                    type:'object',
                    required: ['specialty', 'firstName','lastName','email','matricule','password'],
                    properties: {
                        firstName: {
                            type: 'string',
                            description: 'the firstname of the employee'
                        },
                        lastName: {
                            type: 'string',
                            description: 'the lastname of the employee'

                        },
                        email: {
                            type: 'string',
                            description: 'the email of the employee'

                        },
                        matricule: {
                            type: 'string',
                            description: 'the matricule of the employee'

                        },
                        specialty: {
                            type: 'string',
                            description: 'the specialty of the employee'

                        },
                        password: {
                            type: 'string',
                            description: 'the password of the employee'

                        }

                    
                    }
                }
            }
        }
        
         
    },

    apis: ["./src/server.js"],
}

  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieve some data
 *     description: Retrieve some data from the server.
 *     responses:
 *       '200':
 *         description: Successful response
 *       '404':
 *         description: Data not found
 */
  app.get('/', (req, resp) => {
    resp.send('test get method');
  });

  app.listen(3000)