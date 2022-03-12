import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dtos/create-profile.dto';
import { UpdateProfileDto } from './dtos/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {

  }
  async create(userId: string, createProfileDto: CreateProfileDto) {

    const profile = await this.prisma.profile.create({ data: { userId, ...createProfileDto } });
    return { statusCode: 201, message: 'Profile created', data: profile };
  }

  async findAll() {
    const profiles = await this.prisma.profile.findMany({});
    return { statusCode: 200, message: 'success', data: profiles };
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  async update(id: string, user: any, updateProfileDto: UpdateProfileDto) {
    var profile;
    if (id && user.role === 'ADMIN')
      profile = await this.prisma.profile.update({ where: { id }, data: updateProfileDto });

    profile = await this.prisma.user.update({ where: { id: user.id }, data: { profile: { update: { ...updateProfileDto } } } });

    return { statusCode: 201, message: 'Profile updated', data: profile };
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
