import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'Books' })
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: '_id' })
    _id: string;

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    author: string;

    @Column({ nullable: true })
    yearOfPublication: number;
}