import ImgUploadError from '../exceptions/image-upload.error';
import UnauthorizedError from '../exceptions/unauthorized.error';

import { Image } from '../models';
import { Multipart } from 'fastify-multipart';
import { getBookById } from './book.service';
import { UserInstance } from '../types';
import { EmptyResultError } from 'sequelize';

async function getImageById(id: number, bookId: number) {
  const image = await Image.findOne({ where: { id: id, book_id: bookId } });
  if (!image) {
    throw new EmptyResultError('Image not found');
  }
  return image;
}

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

async function imageDelete(
  id: number,
  bookId: number,
  currentUser: UserInstance
) {
  await getBookById(bookId);
  const image = await getImageById(id, bookId);
  if (!(image.created_by === currentUser.id)) {
    throw new UnauthorizedError('You are not allowed to perform this action');
  }
  return await image.destroy();
}

export { create, imageDelete };
