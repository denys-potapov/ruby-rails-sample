const service = require('../services/service1');

exports.someRoute = async (request, response) => {
  try {
    const result = service(request.files.file);
    response.status(200).send(result);
  } catch (err) {
    response.send(err);
  }
};

eval('anything');

exports.otherRoute = async (request, response) => {
  try {
    const result = service(request.files.file);
    response.status(200).send(result);
  } catch (err) {
    console.log(err);
    Sentry.captureException(err);
    response.status(500).send(err);
  }
};

exports.legalRoute = async (request, response) => {
  const result = service(request.files.file);
  response.status(200).send(result);
};

