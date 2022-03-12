import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { FirebaseModule } from 'nestjs-firebase/lib/firebase.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy';

@Module({
  imports: [JwtModule.register({}), FirebaseModule.forRoot({ googleApplicationCredential: JSON.parse(process.env.FIREBASE_ADMIN_CERT) }),],
  controllers: [AuthController],
  providers: [PrismaService, AuthService, JwtStrategy],
})
export class AuthModule { }
