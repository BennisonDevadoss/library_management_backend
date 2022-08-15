import { UserInstance, UserStatic } from '../../types/user';

export async function isEmailUnique(
  this: UserInstance,
  email: string,
  next: (err?: string) => void
) {
  try {
    if (email) {
      const model = this.constructor as UserStatic;
      const user: UserInstance | null = await model.findOne({
        where: { email: email }
      });
      if (user) {
        return next('Email should be unique');
      }
      return next();
    }
    return next('Email should be present');
  } catch (error) {
    return next();
  }
}

export function isValidPassword(
  this: UserInstance,
  password: string,
  next: (err?: string) => void
) {
  if (password) {
    if (password !== this.password_confirmation) {
      return next('password confirmation doesn\'t match password');
    }
    return next();
  }
  return next('password can\'t be empty');
}
