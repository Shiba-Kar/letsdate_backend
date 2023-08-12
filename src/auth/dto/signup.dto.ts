
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";


export class SignUpDto {

    @ApiProperty({nullable: false,default:"shiba@gmail.com"})
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @ApiProperty({nullable: false,default:"srikantrenu@SHIBA786"})
    @IsNotEmpty()
    password: string;
    
    @ApiProperty({nullable: false,default:"shiva"})
    @IsNotEmpty()
    username: string;
}