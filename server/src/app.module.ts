import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from 'dotenv';
config();
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { User } from './entities/user.entity';
import { Plan } from './entities/plan.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +(process.env.DB_PORT || '3306'),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Plan],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Plan]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
