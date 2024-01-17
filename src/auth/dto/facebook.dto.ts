import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEmpty, IsNotEmpty } from 'class-validator';

export class FacebookDto {
  @ApiProperty({ default: 'facebook' })
  @IsNotEmpty()
  idToken: string;
}
