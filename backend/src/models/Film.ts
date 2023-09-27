import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,JoinColumn,ManyToOne} from "typeorm";
import User from "./User";

@Entity('save_film')
 class Film {
    @PrimaryGeneratedColumn('uuid')    
    id:string

  @Column()
  user_id: string;
  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  userId: User;

  @Column()
  film: string;

  @CreateDateColumn()
  created_at: Date;
 }




export default Film