import ImgUploadError from '../exceptions/image-upload.error';

import { Image } from '../models';
import { Multipart } from 'fastify-multipart';
import { getBookById } from './book.service';
import { UserInstance } from '../types';

async function create(
  bookId: number,
  file: Promise<Multipart>,
  currentUser: UserInstance
) {
  const { mimetype: fileType } = await file;
  if (!(fileType.includes('png') || fileType.includes('svg'))) {
    throw new ImgUploadError('Kindly upload only PNG or SVG file');
  }
  const base64 = (await (await file).toBuffer()).toString('base64');
  const book = await getBookById(bookId);
  const imageCreateAttrs = {
    image: base64,
    book_id: book.id,
    created_by: currentUser.id
  };
  await Image.create(imageCreateAttrs);
  return;
}

export { create };
