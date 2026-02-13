import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Feed } from 'src/feeds/feed.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @OneToMany(() => Feed, (feed) => feed.user)
  feed!: Feed[];
}
