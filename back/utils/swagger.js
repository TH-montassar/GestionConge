import swaggerJsdoc from "swagger-jsdoc";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const HOST = "localhost";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gestion Congé CRUD REST API ",
      version: "1.0.0",
      description:
        "this is A CRUD API made with Express and documentation Swagger",
      contact: {
        name: "Montassar",
        url: "https://www.linkedin.com/in/montassar-front-end-dev/",
        email: "montassarthemri@gmail.com",
      },
    },
    servers: [
      {
        url: `http://${HOST}:${port}/`,
        description: "Development server",
      },
    ],
  },

  apis: ["./controllers/*.js", "./routes/*.js", "./models/*.js"],
};

export const specs = swaggerJsdoc(options);
