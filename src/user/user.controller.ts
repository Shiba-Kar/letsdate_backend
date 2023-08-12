import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Role } from '@prisma/client';
import { ACGuard, UseRoles, UserRoles } from 'nest-access-control';

@ApiTags('Users')
@Controller('users')
@UseGuards(AuthGuard('jwt'), ACGuard)
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @UseRoles({ possession: 'any', action: 'read', resource: "users" })
  @Get()
  findAll() {


    return this.userService.findAll();
  }
  @UseRoles({ possession: 'own', action: 'read', resource: "users" })
  @Get(':id')

  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @UseRoles({ possession: 'any', action: 'update', resource: "users" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @UserRoles() userRoles: any) {
    console.log(userRoles);
    return this.userService.update(id, updateUserDto);
  }
  @UseRoles({ possession: 'own', action: 'delete', resource: "users" })
  @Delete(':id')

  remove(@Param('id') id: string) {

    return this.userService.remove(id);
  }
}
