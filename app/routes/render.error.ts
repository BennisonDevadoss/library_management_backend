import logger from '../config/logger';
import SessionError from '../exceptions/session.errors';
import ImgUploadError from '../exceptions/image-upload.error';
import UnauthorizedError from '../exceptions/unauthorized.error';

import { map } from 'lodash';

import { FastifyError, FastifyReply } from 'fastify';

import { DatabaseError, EmptyResultError, ValidationError } from 'sequelize';

function renderError(reply: FastifyReply, errObj: FastifyError) {
  logger.error({ err: errObj }, errObj.toString());
  if (errObj.validation) {
    /*eslint-disable */
    console.log(errObj.validation);
    const message = map(errObj.validation, (err: any) => err.message);
    reply.code(400).send({ errors: message });
  } else if (errObj instanceof DatabaseError) {
    /*eslint-disable */
    console.log('If the error comes from the data base', errObj);
    const message = errObj.message || errObj.original;
    reply.code(400).send({ errors: message });
  } else if (errObj instanceof SessionError) {
    reply.code(401).send({ errors: [errObj.message] });
  } else if (errObj instanceof EmptyResultError) {
    reply.code(404).send({ errors: [errObj.message] });
  } else if (errObj instanceof ValidationError) {
    const message = map(errObj.errors, (err: any) => err.message);
    reply.code(404).send(message);
  } else if (
    errObj instanceof ImgUploadError ||
    errObj instanceof UnauthorizedError
  ) {
    reply.code(400).send({ errors: [errObj.message] });
  } else if (
    errObj.statusCode &&
    errObj.statusCode >= 400 &&
    errObj.statusCode <= 499
  ) {
    reply.code(errObj.statusCode).send({ errrors: [errObj.message] });
  } else {
    reply.code(500).send({
      errors: [
        'Sorry, something went to wrong on our end. Please try again later'
      ]
    });
  }
}

export { renderError };
