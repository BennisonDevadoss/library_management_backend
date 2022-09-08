import db from '../../config/database';

import { Sequelize } from 'sequelize';
import { PostStatic } from '../../types/post';

import { attributes, modelOptions } from './post.model.attributes';

function PostModelFactory(sequelize: Sequelize): PostStatic {
  return sequelize.define('Post', attributes, modelOptions) as PostStatic;
}

const Post = PostModelFactory(db);

export default Post;
