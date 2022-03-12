import { Injectable } from '@nestjs/common';
import { CreateHobbyDto } from './dtos/create-hobby.dto';
import { UpdateHobbyDto } from './dtos/update-hobby.dto';

@Injectable()
export class HobbyService {
  create(createHobbyDto: CreateHobbyDto) {
    return 'This action adds a new hobby';
  }

  findAll() {
    return `This action returns all hobby`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hobby`;
  }

  update(id: number, updateHobbyDto: UpdateHobbyDto) {
    return `This action updates a #${id} hobby`;
  }

  remove(id: number) {
    return `This action removes a #${id} hobby`;
  }
}
