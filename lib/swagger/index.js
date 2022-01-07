import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  info: {
    title: 'MySQL Registration Swagger API',
    version: '1.0.0',
    description: 'Swagger of Wise School project.',
  },
  host: 'localhost:3000',
  basePath: '/',
  securityDefinitions: {
    jwtAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'cookie',
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./app/routes/*.js'],
};

export const swaggerSpec = swaggerJSDoc(options);
