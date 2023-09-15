import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Category } from './Category.model'

@Entity('cars')
export class Car {
  @Column()
    id: string

  @Column()
    name: string

  @Column()
    description: string

  @Column()
    daily_rate: number

  @Column()
    available = true

  @Column()
    license_plate: string

  @Column()
    fine_amount: number

  @Column()
    brand: string

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
    category_id: string

  @Column()
    created_at: Date

  constructor () {
    this.id = this.id ?? uuidv4()
    this.available = true
    this.created_at = new Date()
  }
}
