import { ApiProperty } from "@nestjs/swagger";

export class CreateProfileDto {
    @ApiProperty({ nullable: true ,default:"shiva"})
    name: string;
}

/* model Profile {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  User      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId    String   @unique
  hobbies   Hobby []
  updatedAt DateTime @updatedAt
  createdAt DateTime @default(now())
} */