import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from 'prisma/prisma.module';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule,PrismaModule, TodoModule,AuthModule],
  controllers: [], 
  providers: [],
})
export class AppModule {}
