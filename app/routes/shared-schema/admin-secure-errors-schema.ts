export const adminSecureErrors = {
  401: {
    description: 'Your session has expired',
    type: 'object',
    properties: {
      errors: { type: 'array', items: { type: 'string' } }
    }
  },
  403: {
    description: 'You are not allowd to perform this action',
    type: 'object',
    properties: {
      errors: { type: 'array', items: { type: 'string' } }
    }
  },
  422: {
    description: 'Unprocessable entity',
    type: 'object',
    properties: {
      errors: { type: 'array', items: { type: 'string' } }
    }
  },
  500: {
    description: 'Something went to wrong',
    type: 'object',
    properties: {
      errors: { type: 'array', items: { type: 'string' } }
    }
  }
};

/* export interface AdminSecureError {
     401: {
       description: string;
       type: string;
       properties: {
         errors: {
           type: string;
           items: {
             type: string;
           };
         };
       };
     };
   } */
