import { RolesBuilder } from "nest-access-control";
import { Roles } from "@prisma/client";

export const roles: RolesBuilder = new RolesBuilder();
roles.grant(Roles.USER).readAny(['users'])
     .grant(Roles.ADMIN).extend(Roles.USER).updateAny(['users']).deleteAny(['users']).createAny(['users']);