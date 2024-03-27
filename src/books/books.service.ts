import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entity/Book';
import { UpdateBookDto } from './dto/updateBookDto';
import {CreateBookDto} from "./dto/createBookDto";

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>
    ) {}

    async createBook(createBookDto: CreateBookDto): Promise<Book> {
        const newBook = this.bookRepository.create(createBookDto);
        return this.bookRepository.save(newBook);
    }

    async findAllBooks(): Promise<Book[]> {
        return this.bookRepository.find();
    }

    async updateBook(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
        // Preload the book using the _id field
        const book = await this.bookRepository.preload({
            _id: id,  // Use the correct property name as defined in the entity
            ...updateBookDto,
        });

        if (!book) {
            throw new NotFoundException(`Book #${id} not found`);
        }

        return this.bookRepository.save(book);
    }
    async deleteBook(_id: string): Promise<void> {
        const book = await this.bookRepository.findOneBy({ _id: _id });
        if (!book) {
            throw new NotFoundException(`Book #${_id} not found`);
        }
        await this.bookRepository.remove(book);
    }
}