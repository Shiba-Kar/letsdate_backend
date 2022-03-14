import { RolesBuilder } from "nest-access-control";
import { Roles } from "@prisma/client";

export const roles: RolesBuilder = new RolesBuilder();
roles
  .grant(Roles.USER).createOwn('users').deleteOwn('users').readAny('users')
  .grant(Roles.ADMIN).extend(Roles.USER).updateAny('users').deleteAny('users');