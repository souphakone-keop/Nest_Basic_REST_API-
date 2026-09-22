import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('attractions')
export class Attraction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  detail: string;

  @Column({ type: 'decimal', precision: 11, scale: 7 })
  longitude: number;

  @Column({ type: 'decimal', precision: 11, scale: 7 })
  latitude: number;
 
  @Column({ type: 'varchar', length: 255 })
  coverimage: string;
}
