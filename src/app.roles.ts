import { RolesBuilder } from 'nest-access-control';
import { Role } from '@prisma/client';

export const roles: RolesBuilder = new RolesBuilder();
roles
  .grant(Role.USER)
  .createOwn('users')
  .deleteOwn('users')
  .readAny('users')
  .updateOwn('users')
  .grant(Role.ADMIN)
  .extend(Role.USER)
  .updateAny('users')
  .deleteAny('users');
