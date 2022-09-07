class UnauthorizedError extends Error {
  constructor(message?: any) {
    super(message);
    this.name = 'UnauthorizedError';
    this.message = message;
  }
}

export default UnauthorizedError;
