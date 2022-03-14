import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { Roles } from '@prisma/client';
import { ACGuard, UseRoles } from 'nest-access-control';
import { Role } from 'src/roles.decorator';

@ApiTags('Users')
@Controller('users')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) { }


  @Get()
  //@UseRoles({ possession: 'any', action: 'read', resource: "users" })
  @UseGuards(AuthGuard('jwt'))
  @Role(Roles.ADMIN)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @UseRoles({ possession: 'any', action: 'read', resource: "users" })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @UseRoles({ possession: 'own', action: 'update', resource: "users" })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {

    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseRoles({ possession: 'any', action: 'delete', resource: "users" })
  remove(@Param('id') id: string) {


    return this.userService.remove(id);
  }
}
