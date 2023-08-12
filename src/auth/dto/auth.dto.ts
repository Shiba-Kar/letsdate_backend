
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";


export class AuthDto {

    @ApiProperty({nullable: false})
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @ApiProperty({nullable: false})
    @IsNotEmpty()
    password: string;
    
    @ApiProperty({nullable: false})
    @IsNotEmpty()
    username: string;
}