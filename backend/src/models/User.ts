import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import bcrypt from "bcryptjs";
@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @BeforeInsert()
  @BeforeUpdate()
  hasPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
  @CreateDateColumn()
  created_at: string;
}
