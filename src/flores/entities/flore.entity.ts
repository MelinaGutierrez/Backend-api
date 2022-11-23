import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flore {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  color: string;
  @Column()
  cantPetalos: number;
  @Column()
  origen: string;
}
