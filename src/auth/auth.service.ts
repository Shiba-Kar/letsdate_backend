import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma, Role, User } from '@prisma/client';
import * as argon from 'argon2';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, SignUpDto, GoogleDto, FacebookDto } from './dto';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService, @InjectFirebaseAdmin() private firebase: FirebaseAdmin) { }

  async signToken(user: User): Promise<string> {
    const { id, username, email } = user;
    return this.jwt.signAsync({ id, username, email }, { secret: process.env.JWT_SECRET })
  }

  async signUp(signupDto: SignUpDto) {
    try {
      const hash = await argon.hash(signupDto.password);
      const user = await this.prisma.user.create({ data: { email: signupDto.email, password: hash, username: signupDto.username, roles: [Role.USER] } });
      delete user.password
      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new ForbiddenException('User already exists');
      }
    }

  }
  async signIn(loginDto: LoginDto) {
    var user = await this.prisma.user.findUnique({ where: { email: loginDto.email } });
    if (!user)
      throw new ForbiddenException('User does not exist');

    const pwMatched = await argon.verify(user.password, loginDto.password);
    if (!pwMatched)
      throw new ForbiddenException('Password does not match');
    const token = await this.signToken(user);
    return { statusCode: 200, message: 'Success', token: token, user: user };
  }

  async googleLogin(googleDto: GoogleDto) {
    try {
      var x = await this.firebase.auth.verifyIdToken(googleDto.idToken);
      console.log(x);
    } catch (error) {
      throw new ForbiddenException('Invalid Google Token');
    }
  }
  async facebookLogin(facebookDto: FacebookDto) {
    try {
      var x = await this.firebase.auth.verifyIdToken(facebookDto.idToken);
      console.log(x);
    } catch (error) {
      throw new ForbiddenException('Invalid Firebase Token');
    }
  }
  async validateUser(email: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user;
  }
}
