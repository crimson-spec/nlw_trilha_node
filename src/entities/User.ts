import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, Generated } from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;
    /* 
        constructor(){
            if(!this.id)
                this.id = this.increment;
        } */

}
