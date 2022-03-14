import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ProfileService } from './profile/profile.service';
import { AuthService } from './auth/auth.service';
import { ProfileController } from './profile/profile.controller';
import { PrismaService } from './prisma/prisma.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { JwtStrategy } from './auth/strategy';
import { JwtService } from '@nestjs/jwt';
import { ProfileModule } from './profile/profile.module';
import { HobbyModule } from './hobby/hobby.module';
import { ImageService } from './image/image.service';
import { ImageController } from './res/image/image.controller';
import { ImageModule } from './image/image.module';
import { MulterModule } from '@nestjs/platform-express';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './app.roles';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';


@Module({
  imports: [AppModule, PrismaModule, AuthModule, UserModule, ProfileModule, HobbyModule, ImageModule, AccessControlModule.forRoles(roles)],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard,
  },]
})
export class AppModule { }
