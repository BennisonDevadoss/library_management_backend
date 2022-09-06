class ImgUploadError extends Error {
  constructor(message?: any) {
    super(message);
    this.name = 'ImgUploadError';
    this.message = message;
  }
}

export default ImgUploadError;
