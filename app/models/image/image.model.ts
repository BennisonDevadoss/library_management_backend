import db from '../../config/database';

import { Sequelize } from 'sequelize';
import { attributes, modelOptions } from './image.model.attributes';

function ImageModelFactory(sequelize: Sequelize) {
  return sequelize.define('Image', attributes, modelOptions);
}

const Image = ImageModelFactory(db);

export default Image;
