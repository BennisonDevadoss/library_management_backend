import { UserInstance } from '../types';

export default class UserPolicy {
  constructor(private currentUser: UserInstance) {}

  canAdd() {
    return this.currentUser.isAdmin();
  }
  canUpdate(user: UserInstance) {
    return this.currentUser.isAdmin() && user.id !== this.currentUser.id;
  }
  canDelete(user: UserInstance) {
    return this.currentUser.isAdmin() && user.id !== this.currentUser.id;
  }
  canDetail() {
    return this.currentUser.isAdmin();
  }
}
