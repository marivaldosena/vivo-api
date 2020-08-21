import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bot extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    guid: string;

    @Column()
    name: string;
}