import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {BooksService} from "./books.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Book} from "./entity/Book";

@Module({
  imports: [
    // MongooseModule.forFeature([{
    //   name: Book.name,
    //   schema: BookSchema
    // }])
    TypeOrmModule.forFeature([Book])
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
