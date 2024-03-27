import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import {BooksService} from "./books.service";
import {CreateBookDto} from "./dto/createBookDto";
import {UpdateBookDto} from "./dto/updateBookDto";

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Post()
    async createBook(@Body() createBookDto: CreateBookDto) {
        return this.booksService.createBook(createBookDto);
    }
    @Get()
    async getAllBooks() {
        return this.booksService.findAllBooks();
    }
    @Patch(':id')
    async updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
        return this.booksService.updateBook(id, updateBookDto);
    }
    @Delete(':id')
    async deleteBook(@Param('id') id: string) {
        return this.booksService.deleteBook(id);
    }
}
