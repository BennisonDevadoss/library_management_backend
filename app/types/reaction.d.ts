import { BuildOptions, Model } from 'sequelize';

export interface ReactionAttributes {
  id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export type ReactionCreationAttributes = Pick<ReactionAttributes, 'name'>;

export interface ReactionInstance
  extends Model<ReactionAttributes, ReactionAttributes>,
    ReactionAttributes {}

export type ReactionStatic = typeof Model & {
  new (value?: object, options?: BuildOptions): ReactionInstance;
};
