import { User } from '@prisma/client';
export class Users {
  constructor(private readonly user: User) {
    user = this.user;
  }
}
