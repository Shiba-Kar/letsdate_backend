
import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsNotEmpty } from "class-validator";


export class LoginDto {

    @ApiProperty({nullable: true,default:"shiba@gmail.com"})
   
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @ApiProperty({nullable: false,default:"srikantrenu@SHIBA786"})
    @IsNotEmpty()
    password: string;
}