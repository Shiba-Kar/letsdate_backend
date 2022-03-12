import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dtos/create-profile.dto';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Profile')
@UseGuards(AuthGuard('jwt'))
@Controller('profiles')
@ApiBearerAuth()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) { }


  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto, @Req() req: any) {
    const userId = req.user.id;
    return this.profileService.create(userId, createProfileDto);
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(+id);
  }

  @ApiQuery({ name: 'profileId', required: false })
  @Patch(':id')
  update(@Param('profileId') id: string, @Body() updateProfileDto: UpdateProfileDto, @Req() req: any) {


    return this.profileService.update(id, req, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(+id);
  }
}
