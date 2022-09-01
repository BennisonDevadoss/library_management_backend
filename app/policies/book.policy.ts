import { UserInstance } from '../types';

export default class BookPolicy {
  constructor(private currentUser: UserInstance) {}
  canCreate() {
    return this.currentUser.isAdmin();
  }
  canUpdate() {
    return this.currentUser.isAdmin();
  }
  canDetail() {
    return this.currentUser.isAdmin();
  }
  canDelete() {
    return this.currentUser.isAdmin();
  }
}
