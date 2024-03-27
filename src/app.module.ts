import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import { BooksModule } from './books/books.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      // MongooseModule.forRoot('mongodb+srv://new_user_blya:***********@cluster0.lgtepjy.mongodb.net/test_ios?retryWrites=true&w=majority'),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '34.18.41.140',  
      port: 5432,
      username: 'postgres',  
      password: 'pass123',   
      database: 'postgres',   
      autoLoadEntities: true,
      synchronize: true,
    }),
    BooksModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
