import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  password: string

  @Column()
  email: string

  @Column()
  driver_license: string

  @Column()
  isAdmin: boolean

  @Column()
  avatar: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    this.id = this.id ?? uuidv4()
  }
}
