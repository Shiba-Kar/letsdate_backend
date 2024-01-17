import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateHobbyDto } from './create-hobby.dto';

export class UpdateHobbyDto extends PartialType(CreateHobbyDto) {}

/*

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  email     String   @unique
  username  String   @unique
  avtar     String
  password  String
  firstName String?
  lastName  String?
  profile   Profile?
  updatedAt DateTime @updatedAt
  createdAt DateTime @default(now())
} 

*/
