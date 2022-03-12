import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
   
    @ApiProperty({ nullable: true })
    avtar: string

    @ApiProperty({ nullable: true })
    firstName: string

    @ApiProperty({ nullable: true })
    lastName: string
}
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
} */