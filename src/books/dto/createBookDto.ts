// create-book.dto.ts

import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsOptional()
    @IsNumber()
    yearOfPublication?: number;
}
