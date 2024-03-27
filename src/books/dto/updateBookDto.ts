// create-book.dto.ts

import {IsNotEmpty, IsOptional, IsString, IsNumber, IsUUID} from 'class-validator';

export class UpdateBookDto {
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
