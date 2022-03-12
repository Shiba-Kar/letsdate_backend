import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto, SignUpDto, GoogleDto, FacebookDto } from './dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signUp(@Body() dto: SignUpDto) {
        return this.authService.signUp(dto);
    }

    @Post('signin')
    signIn(@Body() dto: LoginDto) {
        return this.authService.signIn(dto);
    }

    @Post('google')
    google(@Body() googleDto: GoogleDto) {
        return this.authService.googleLogin(googleDto);
    }

    @Post('facebook')
    facebook(@Body() facebookDto: FacebookDto) {
        return this.authService.facebookLogin(facebookDto);
    }
}
