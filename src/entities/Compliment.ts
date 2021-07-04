import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm"
import Tag from "./Tag";
import User from "./User";


@Entity("compliments")
export default class Compliment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_sender: number

    @Column()
    user_receiver: number;

    @Column()
    tag_id: number;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => User)
    userReceiver: User;

    @JoinColumn({ name: "user_sender" })
    @ManyToOne(() => User)
    userSender: User;

    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => Tag)
    tag: Tag;

}