import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Food {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
  @Column()
  image: string;

  @Column()
  description: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;
  // @Column("decimal", { precision: 10, scale: 2 })
  // quantity: number;

  @CreateDateColumn()
  created_at: string;
}

export default Food;
