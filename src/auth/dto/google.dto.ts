
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEmpty, IsNotEmpty } from "class-validator";


export class GoogleDto {

    @ApiProperty({default:"kdsansa"})
    @IsNotEmpty()
    idToken: string;
    
  
}