import db from '../../config/database';

import { Sequelize } from 'sequelize';
import { CommentStatic } from '../../types';

import { attributes, modelOptions } from './comment.model.attributes';

function CommentModelFactory(sequelize: Sequelize): CommentStatic {
  return sequelize.define('Comment', attributes, modelOptions) as CommentStatic;
}

const Comment = CommentModelFactory(db);

export default Comment;
