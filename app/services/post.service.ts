import ImgUploadError from '../exceptions/post-upload.error';
import UnauthorizedError from '../exceptions/unauthorized.error';

import { Post } from '../models';
import { Multipart } from 'fastify-multipart';
import { getBookById } from './book.service';
import { UserInstance } from '../types';
import { EmptyResultError } from 'sequelize';

async function getPostById(id: number, bookId: number) {
  const post = await Post.findOne({ where: { id: id, book_id: bookId } });
  if (!post) {
    throw new EmptyResultError('Post not found');
  }
  return post;
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
  const postCreateAttrs = {
    post: base64,
    book_id: book.id,
    created_by: currentUser.id
  };
  await Post.create(postCreateAttrs);
  return;
}

async function postDelete(
  id: number,
  bookId: number,
  currentUser: UserInstance
) {
  await getBookById(bookId);
  const post = await getPostById(id, bookId);
  if (!(post.created_by === currentUser.id)) {
    throw new UnauthorizedError('You are not allowed to perform this action');
  }
  return await post.destroy();
}

export { create, postDelete };
