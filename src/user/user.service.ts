import { Injectable } from '@nestjs/common';
import { Exclude } from 'class-transformer';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }


  async findAll() {
    const users = await this.prisma.user.findMany(
      {
        select: {
          id: true,
          username: true,
          email: true,
          roles: true,
          profile: true,
          createdAt: true,
          firstName: true,
          lastName: true,
          password: false,
          updatedAt: true
        }
      })

    return { statusCode: 200, message: 'success', data: { users: users } }
  }

  async findOne(id: string) {
    try {
      
      const user = await this.prisma.user.findUnique({ where: { id }, include: { profile: true } })
      delete user.password
      return { statusCode: 200, message: 'success', data: { user } }
    } catch (error) {
      return { statusCode: 400, message: 'User not found' }
    }

  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.prisma.user.update({ where: { id }, data: updateUserDto })
    return { statusCode: 200, message: 'User updated successfully' }
  }

  async remove(id: string) {

    await this.prisma.user.delete({ where: { id: id } })
    return { statusCode: 200, message: 'User deleted successfully' }
  };

}
