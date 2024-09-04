import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './users/user.service';
import { UsersController } from './users/user.controller';
import { PrismaService } from './database/prisma.service';
import { PostService } from './posts/post.service';
import { PostsController } from './posts/post.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, PostsController],
  providers: [AppService, UserService, PrismaService, PostService],
})
export class AppModule {}
