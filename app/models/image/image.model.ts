import db from '../../config/database';

import { Sequelize } from 'sequelize';
import { attributes, modelOptions } from './image.model.attributes';
import { ImageStatic } from 'app/types/image';

function ImageModelFactory(sequelize: Sequelize): ImageStatic {
  return sequelize.define('Image', attributes, modelOptions) as ImageStatic;
}

const Image = ImageModelFactory(db);

export default Image;
