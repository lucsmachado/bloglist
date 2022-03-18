const logger = require('./logger');

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method),
  logger.info('Path:', request.path),
  logger.info('Body:', request.body),
  logger.info('---')
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).json({ error: 'Unkown Endpoint' });
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  next(error);
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
};