import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn({ length: 255 })
    id: string;

    @Column({ length: 255 })
    name: string;

    @Column()
    age: number;
}